const express = require("express");
const router = express.Router();
const BuyOrder = require("../models/BuyOrder");

router.get("/", async (req, res) => {
  try {
    const buyOrders = await BuyOrder.find();
    return res.json(buyOrders);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const buyOrder = await BuyOrder.findById(req.params.id);

    if (!buyOrder) {
      return res.status(404).json({ error: "data not found ..." });
    }

    return res.json(buyOrder);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  const buyOrder = new BuyOrder({
    name: req.body.name,
    maxBidPrice: req.body.maxBidPrice,
    dataPackageType: req.body.dataPackageType,
  });

  try {
    const newBuyOrder = await buyOrder.save(); 
    return res.json(newBuyOrder);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.patch("/:id", async (req, res) => { 
  const { name, maxBidPrice, dataPackageType } = req.body;
 
  try {
    let buyOrder = await BuyOrder.findById(req.params.id);
 
    if (!buyOrder) {
      res.statusCode(404);
    }

    // update Object
    buyOrder.name = name;
    buyOrder.maxBidPrice = maxBidPrice;
    buyOrder.dataPackageType = dataPackageType || book.dataPackageType;

    await buyOrder.updateOne(
      {
        name: buyOrder.name,
        maxBidPrice: buyOrder.maxBidPrice,
        dataPackageType: buyOrder.dataPackageType,
      },
      { $set: buyOrder },
      { upsert: true }
    );

    return res.statusCode(200);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const buyOrder = await BuyOrder.deleteOne({ _id: req.params.id });
    return res.status(200).json(buyOrder);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
