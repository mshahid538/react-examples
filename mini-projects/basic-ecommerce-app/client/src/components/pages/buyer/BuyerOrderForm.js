import React from "react";
import { DATA_PACKAGE_TYPE } from "../../../constants";
import {
  createBuyOrder,
  updateBuyOrder,
} from "../../../services/BuyerOrderService";

const BuyerOrderForm = ({ order }) => {
  const [name, setName] = React.useState("");
  const [maxBidPrice, setMaxBidPrice] = React.useState(0);
  const [dataType, setDataType] = React.useState("");

  React.useEffect(() => {
    setName(order?.name);
    setMaxBidPrice(order?.maxBidPrice);
    setDataType(order?.dataPackageType);
  }, [order]);

  const [isValidated, setIsValidated] = React.useState(true);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "maxBidPrice") {
      setMaxBidPrice(e.target.value);
    }
    if (e.target.name === "dataPackageType") {
      setDataType(e.target.value);
    }
  };

  const handleSubmit = async () => {
    if (name === "" || maxBidPrice === 0 || dataType === "") {
      setIsValidated(false);
      return;
    }

    !isValidated && setIsValidated(true);

    if (order) {
      await updateBuyOrder({ id: order._id, name, maxBidPrice, dataType });
      return;
    }

    const response = await createBuyOrder({ name, maxBidPrice, dataType });

    if (response?.status !== 200) {
      console.log(`Error: ${response.status} : ${response.statusText}`);
      return;
    }
  };
  return (
    <div className="card p-2 border-0 shadow-sm">
      <h6 className="text-center">Buyer Order Form</h6>
      <div className="mt-2">
        <div className="form-group my-3">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={handleChange}
            value={name}
            name="name"
            error={!isValidated}
            required
          />
        </div>
        <div className="form-group my-3">
          <label for="name">Max Bid Price*</label>
          <input
            type="number"
            className="form-control"
            placeholder="Max Bid Price"
            onChange={handleChange}
            name="maxBidPrice"
            required
            error={!isValidated}
          />
        </div>
        <div className="form-group my-3">
          <label>Data Package Type*</label>
          <select
            className="form-control"
            value={dataType}
            onChange={handleChange}
            name="dataPackageType"
            error={!isValidated}
          >
            {Object.entries(DATA_PACKAGE_TYPE).map(([key, value]) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group mb-2">
          <div className="d-flex justify-content-around ">
            {!order ? (
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
