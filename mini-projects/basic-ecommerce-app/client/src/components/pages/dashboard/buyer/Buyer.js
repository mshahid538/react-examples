import React from "react";
import BuyOrderTable from "./BuyOrderTable";
import BuyOrderForm from "./BuyOrderForm";

const Buyer = () => {
  const [buyOrder, setBuyOrder] = React.useState(null);

  const handleEdit = (order) => {
    setBuyOrder(order);
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-9">
          <BuyOrderTable onEdit={handleEdit} />
        </div>
        <div className="col-12 col-md-12 col-lg-3">
          <BuyOrderForm order={buyOrder} />
        </div>
      </div>
    </div>
  );
};

export default Buyer;
