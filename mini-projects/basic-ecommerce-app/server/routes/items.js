const express = require("express");
const router = express.Router();
const Items = require("../models/items");

router.get("/", async (req, res) => {
  try {
    const items = await Items.find();
    return res.json(items);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ error: "data not found ..." });
    }

    return res.json(item);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  const { name, desc, category, price, dateAdded } = req.body;
  const item = new Items({
    name,
    desc,
    category,
    price,
    dateAdded,
  });

  try {
    const newItem = await item.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const item = await Items.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await Items.deleteOne({ _id: req.params.id });
    return res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
