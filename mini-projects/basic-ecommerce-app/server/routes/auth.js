const express = require("express");
const router = express.Router();
const Buyer = require("../models/buyer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup/", (req, res) => {
  const { username, password, fullname, email, type } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    const buyer = new Buyer({
      username: username,
      password: hash,
      fullname: fullname,
      email: email,
      type: type,
    });

    buyer
      .save()
      .then((newBuyer) => {
        res.status(201).json({ buyer: newBuyer });
      })
      .catch((err) => {
        res.send(500).json({ error: err });
      });
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const buyer = await Buyer.find({ username: username.toLowerCase() });

    if (buyer.length < 1) {
      return res.status(204).json({ message: "User Not Found ..." });
    }

    const result = await bcrypt.compare(password, buyer[0].password);

    if (!result) {
      return res
        .status(401)
        .json({ message: "User Authentication Failed ..." });
    }

    const token = jwt.sign(
      {
        username: buyer[0].username,
        email: buyer[0].email,
        fullname: buyer[0].fullname,
        type: buyer[0].type,
      },
      "this is my secret key",
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      buyer: buyer[0],
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
