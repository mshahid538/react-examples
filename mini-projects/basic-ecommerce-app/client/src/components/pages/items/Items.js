import React from "react";
import ItemsTable from "./ItemsTable";
import ItemsForm from "./ItemsForm";

function Items() {
  const [item, setItem] = React.useState([]);

  const handleEdit = (item) => {
    setItem(item);
  };

  return (
    <div className="row mt-4">
      <div className="col-12 col-md-12 col-lg-9 py-2">
        <ItemsTable onEdit={handleEdit} />
      </div>
      <div className="col-12 col-md-12 col-lg-3 py-2">
        <ItemsForm item={item} />
      </div>
    </div>
  );
}

export default Items;
