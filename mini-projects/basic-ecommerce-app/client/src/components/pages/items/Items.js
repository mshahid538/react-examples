import React from "react";
import ItemsOrderTable from "./ItemsOrderTable";
import ItemsOrderForm from "./ItemsOrderForm";

function Items() {
  const [buyOrder, setBuyOrder] = React.useState([]);

  const handleEdit = (order) => {
    setBuyOrder(order);
  };

  return (
    <div className="row mt-4">
      <div className="col-12 col-md-12 col-lg-9 py-2">
        <ItemsOrderTable onEdit={handleEdit} />
      </div>
      <div className="col-12 col-md-12 col-lg-3 py-2">
        <ItemsOrderForm order={buyOrder} />
      </div>
    </div>
  );
}

export default Items;
