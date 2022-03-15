const express = require("express");
const router = express.Router();
const Buyer = require("../models/buyers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup/", (req, res) => {
  const { name, password, email } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    const buyer = new Buyer({
      name: name,
      password: hash,
      email: email,
      creationDate: new Date(), 
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
  const { name, password } = req.body;

  try {
    const buyer = await Buyer.find({ name });

    if (buyer.length < 1) {
      return res.status(204).json({ message: "Buyer Not Found ..." });
    }

    const result = await bcrypt.compare(password, buyer[0].password);

    if (!result) {
      return res
        .status(401)
        .json({ message: "Buyer Authentication Failed ..." });
    }

    const token = jwt.sign(
      {
        name: buyer[0].name,
        email: buyer[0].email, 
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
