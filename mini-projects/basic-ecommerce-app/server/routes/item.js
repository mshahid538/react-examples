const express = require("express");
const router = express.Router();
const Item = require("../models/item");

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    return res.json(items);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ error: "data not found ..." });
    }

    return res.json(item);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  const item = new Item({
    name: req.body.name,
    desc: req.body.desc,
    categories: req.body.categories,
    price: req.body.price,
    date_added: req.body.date_added,
  });

  try {
    const newItem = await item.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.patch("/:id", async (req, res) => {
  const { name, desc, categories, price, date_added } = req.body;

  try {
    let item = await Item.findById(req.params.id);

    if (!item) {
      res.statusCode(404);
    }
    // update Object
    item.name = name;
    item.desc = desc;
    item.categories = categories || item.categories;
    item.price = price || item.price;
    date_added = date_added || item.date_added;

    const updatedItem = await item.save();
    return res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.deleteOne({ _id: req.params.id });
    return res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
