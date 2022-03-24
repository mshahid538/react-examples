import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getItems, deleteItem } from "../../../services/ItemService";
import { addToCart } from "../../../features/CartSlice";

function ItemsTable({ onEdit, item }) {
  const [tableItems, setTableItems] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getItemsDB();
  }, [tableItems, item]);

  const getItemsDB = async () => {
    const res = await getItems();
    setTableItems(res.data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    toast.error("Deleted item");
    getItemsDB();
  };

  const handleEdit = (item) => {
    onEdit(item);
  };

  return (
    <div className="row">
      <div className="col-lg-11 col-xl-12 mx-auto">
        <div className="card border shadow">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col" className="text-center text-nowrap ">
                      Name
                    </th>
                    <th scope="col" className="text-center text-nowrap">
                      Price
                    </th>
                    <th scope="col" className="text-center text-nowrap">
                      Category
                    </th>
                    <th scope="col" className="text-center text-nowrap">
                      Description
                    </th>
                    <th scope="col" className="text-center text-nowrap">
                      Date Added
                    </th>
                    <th scope="col" className="text-center text-nowrap">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableItems.map((item) => (
                    <tr key={item._id}>
                      <td className="text-center text-nowrap">{item.name}</td>
                      <td className="text-center">{item.price}</td>
                      <td className="text-center">{item.category}</td>
                      <td className="text-center text-nowrap">{item.desc}</td>
                      <td className="text-center">{item.dateAdded}</td>

                      <td className="text-center text-nowrap">
                        <ul className="list-inline m-0 ">
                          <li className="list-inline-item">
                            <button
                              className="btn btn-success btn-sm"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                              onClick={() => handleEdit(item)}
                            >
                              <i className="bi bi-pencil"></i>
                            </button>
                          </li>
                          <li className="list-inline-item">
                            <button
                              className="btn btn-danger btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                              onClick={() => handleDelete(item._id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </li>
                          <li className="list-inline-item">
                            <button
                              className="btn btn-info btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to cart"
                              onClick={() => dispatch(addToCart(item))}
                            >
                              <i className="bi bi-cart"></i>
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsTable;
