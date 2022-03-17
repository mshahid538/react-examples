import React from "react";
import { useDispatch } from "react-redux";
import {
  getBuyOrdersDB,
  deleteBuyOrder,
} from "../../../services/BuyerOrderService";
import { addToCart } from "../../../features/CartSlice";
import { toast } from "react-toastify";

export const CATEGORY_TYPE = {
  LATITUDE: "Latitude",
  DELL: "Dell",
  HP: "Hp",
};

const ItemsOrderTable = React.memo(function BuyOrderTable({ onEdit, order }) {
  const [buyOrders, setBuyOrders] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getBuyOrders();
  }, [buyOrders, order]);

  const getBuyOrders = async () => {
    const res = await getBuyOrdersDB();
    setBuyOrders(res.data);
  };

  const handleDelete = async (id) => {
    await deleteBuyOrder(id);
    toast.error("Deleted item");
    getBuyOrders();
  };

  const handleEdit = (order) => {
    onEdit(order);
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
                  {buyOrders.map((order) => (
                    <tr key={order._id}>
                      <td className="text-center text-nowrap">{order.name}</td>
                      <td className="text-center">{order.price}</td>
                      <td className="text-center">{order.category}</td>
                      <td className="text-center text-nowrap">{order.desc}</td>
                      <td className="text-center">{order.dateAdded}</td>

                      <td className="text-center text-nowrap">
                        <ul className="list-inline m-0 ">
                          <li className="list-inline-item">
                            <button
                              className="btn btn-success btn-sm"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                              onClick={() => handleEdit(order)}
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
                              onClick={() => handleDelete(order._id)}
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
                              onClick={() => dispatch(addToCart(order))}
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
});

export default ItemsOrderTable;
