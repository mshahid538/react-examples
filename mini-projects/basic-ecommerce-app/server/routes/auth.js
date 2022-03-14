const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup/", (req, res) => {
  const { username, password, fullname, email, type } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    const user = new User({
      username: username,
      password: hash,
      fullname: fullname,
      email: email,
      type: type,
    });

    user
      .save()
      .then((newUser) => {
        res.status(201).json({ user: newUser });
      })
      .catch((err) => {
        res.send(500).json({ error: err });
      });
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.find({ username });

    if (user.length < 1) {
      return res.status(204).json({ message: "User Not Found ..." });
    }

    const result = await bcrypt.compare(password, user[0].password);

    if (!result) {
      return res
        .status(401)
        .json({ message: "User Authentication Failed ..." });
    }

    const token = jwt.sign(
      {
        username: user[0].username,
        email: user[0].email,
        fullname: user[0].fullname,
        type: user[0].type,
      },
      "this is my secret key",
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      user: user[0],
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
