import React from "react";
import BuyerOrderTable from "./BuyerOrderTable";
import BuyerOrderForm from "./BuyerOrderForm";

const Buyer = () => {
  const [buyOrder, setBuyOrder] = React.useState(null);

  const handleEdit = (order) => {
    setBuyOrder(order);
  };
  return (
    <div className="container mt-4 p-0">
      <div className="row p-0">
        <div className="col-12 col-md-12 col-lg-9">
          <BuyerOrderTable onEdit={handleEdit} />
        </div>
        <div className="col-12 col-md-12 col-lg-3">
          <BuyerOrderForm order={buyOrder} />
        </div>
      </div>
    </div>
  );
};

export default Buyer;
