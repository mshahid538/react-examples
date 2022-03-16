import React from "react";
import {
  createBuyOrder,
  updateBuyOrder,
} from "../../../services/BuyerOrderService";
import { Catagory_type } from "./ItemsOrderTable";

const BuyerOrderForm = ({ order }) => {
  const [isValidated, setIsValidated] = React.useState(true);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [catagory, setCatagory] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [date_added, setDate_Added] = React.useState("");

  React.useEffect(() => {
    setName(order?.name);
    setPrice(order?.price);
    setCatagory(order?.catagory);
    setDesc(order?.desc);
    setDate_Added(order?.date_added);
  }, [order]);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "price") {
      setPrice(e.target.value);
    }
    if (e.target.name === "catagory") {
      setCatagory(e.target.value);
    }
    if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
    if (e.target.name === "date_added") {
      setDate_Added(e.target.value);
    }
  };

  const handleSubmit = async () => {
    if (
      name === "" ||
      price === 0 ||
      catagory === "" ||
      desc === "" ||
      date_added === ""
    ) {
      setIsValidated(false);
      return;
    }

    !isValidated && setIsValidated(true);

    if (order) {
      await updateBuyOrder({
        id: order._id,
        name,
        price,
        catagory,
        desc,
        date_added,
      });
      return;
    }

    const response = await createBuyOrder({
      name,
      price,
      catagory,
      desc,
      date_added,
    });

    if (response?.status !== 200) {
      console.log(`Error: ${response.status} : ${response.statusText}`);
      return;
    }
  };
  return (
    <div className="card p-2 border shadow">
      <h6 className="text-center">Buyer Order Form</h6>
      <div className="mt-2">
        <div className="form-group my-3">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            onChange={handleChange}
            value={name}
            name="name"
            error={!isValidated}
            required
          />
        </div>
        <div className="form-group my-3">
          <label for="name">Price*</label>
          <input
            value={price}
            type="number"
            className="form-control"
            placeholder="price"
            onChange={handleChange}
            name="price"
            required
            error={!isValidated}
          />
        </div>

        <div className="form-group my-3">
          <label>Catagory*</label>
          <select
            className="form-control"
            onChange={handleChange}
            name="catagory"
            error={!isValidated}
            value={catagory}
          >
            {Object.entries(Catagory_type).map(([key, value]) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group my-3">
          <label for="name">Description*</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
            onChange={handleChange}
            name="desc"
            value={desc}
            required
            error={!isValidated}
          />
        </div>
        <div className="form-group my-3">
          <label for="name">Date Added*</label>
          <input
            type="text"
            className="form-control"
            placeholder="date added"
            onChange={handleChange}
            name="date_added"
            value={date_added}
            required
            error={!isValidated}
          />
        </div>

        <div className="form-group mb-2">
          <div className="d-flex justify-content-around ">
            {order && order.name ? (
              <div>
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={handleSubmit}
                >
                  Create
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerOrderForm;
