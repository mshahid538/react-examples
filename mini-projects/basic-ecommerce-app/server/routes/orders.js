const express = require("express");
const router = express.Router();
const Orders = require("../models/orders");
const Items = require("../models/items");
const Buyer = require("../models/buyers");

const AddItemsToOrder = function (orderId, orderitems, callback) {
  return Orders.findByIdAndUpdate(
    orderId,
    { $push: { orderitems: orderitems } },
    { new: true, useFindAndModify: false },
    callback
  );
};

router.post("/", (req, res) => {
  let { name, balance, orderitems, buyerId } = req.body.data;

  // Find the buyer by ID
  Buyer.findById(buyerId).then((buyer) => {
    let order = new Orders({
      Buyers: buyer,
      balance,
      name,
    });

    order.save().then(() => {
      var itemList = [];
      var counter = 0;

      orderitems.forEach((item) => {
        Items.findById(item._id).then((itemObj) => {
          counter++;

          let orderItem = {
            Items: itemObj,
            quantity: item.cartQuantity,
            name: item.name,
          };

          itemList.push(orderItem);

          if (counter == orderitems.length) {
            AddItemsToOrder(order.id, itemList, function (err, result) {
              res.json(result);
            });
          }
        });
      });
    });
  });
});
module.exports = router;
