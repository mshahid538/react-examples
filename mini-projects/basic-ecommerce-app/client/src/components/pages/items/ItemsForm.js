import React from "react";
import { toast } from "react-toastify";
import { createItem, updateItem } from "../../../services/ItemService";
import { CATEGORY_TYPE } from "../../../constants";

function ItemsForm({ item }) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [dateAdded, setDateAdded] = React.useState("");
  const [isValidated, setIsValidated] = React.useState(true);

  React.useEffect(() => {
    setName(item?.name);
    setPrice(item?.price);
    setCategory(item?.category);
    setDesc(item?.desc);
    setDateAdded(item?.dateAdded);
  }, [item]);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "price") {
      setPrice(e.target.value);
    }
    if (e.target.name === "category") {
      setCategory(e.target.value);
    }
    if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
    if (e.target.name === "dateAdded") {
      setDateAdded(e.target.value);
    }
  };

  const isValidation =
    name === "" ||
    price === 0 ||
    category === "" ||
    desc === "" ||
    dateAdded === "";

  const handleCreateItem = async () => {
    if (isValidation) {
      setIsValidated(false);
      return;
    }

    const response = await createItem({
      name,
      price,
      category,
      desc,
      dateAdded,
    });

    if (response?.status !== 200) {
      console.log(`Error: ${response.status} : ${response.statusText}`);
      return;
    }
    toast.info("Item added");
    !isValidated && setIsValidated(true);
  };

  const handleUpdateItem = async () => {
    if (item) {
      await updateItem({
        id: item._id,
        name,
        price,
        category,
        desc,
        dateAdded,
      });
      toast.info("Item Updated");
      return;
    }
  };

  return (
    <div className="card p-2 border shadow">
      <h6 className="text-center">Buyer Order Form</h6>
      <div className="mt-2">
        <div className="form-group my-3">
          <label htmlFor="name">Name</label>
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
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="name">Price*</label>
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
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="category">Catagory*</label>
              <select
                className="form-control"
                onChange={handleChange}
                name="category"
                value={category}
                error={!isValidated}
              >
                {Object.entries(CATEGORY_TYPE).map(([key, value]) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="form-group my-3">
          <label htmlFor="name">Description*</label>
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
          <label htmlFor="dateAdded">Date Added*</label>
          <input
            type="text"
            className="form-control"
            placeholder="dd/mm/yyyy"
            onChange={handleChange}
            name="dateAdded"
            value={dateAdded}
            required
            error={!isValidated}
          />
        </div>
        <div className="form-group mb-2">
          <div className="d-flex justify-content-around ">
            {item && item.name ? (
              <div>
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={handleUpdateItem}
                >
                  Update
                </button>
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={handleCreateItem}
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
}

export default ItemsForm;
