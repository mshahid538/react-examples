import React from "react";

import {
  getBuyOrdersDB,
  deleteBuyOrder,
} from "../../../services/BuyerOrderService";

export const Category_type = {
  LATITUDE: "Latitude",
  DELL: "Dell",
  HP: "Hp",
};

const BuyerOrderTable = React.memo(function BuyOrderTable({ onEdit }) {
  const [buyOrders, setBuyOrders] = React.useState([]);

  React.useEffect(() => {
    getBuyOrders();
  }, []);

  const getBuyOrders = async () => {
    const res = await getBuyOrdersDB();
    setBuyOrders(res.data);
  };

  const handleDelete = async (id) => {
    await deleteBuyOrder(id);
    getBuyOrders();
  };

  const handleEdit = (order) => {
    console.log(order, "oderrrrrrr");
    onEdit(order);
  };

  return (
    // <div className="container">
    <div className="row">
      <div className="col-lg-11 col-xl-12 mx-auto">
        <div className="card border shadow">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table ">
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
                      <td className="text-center">{order.name}</td>
                      <td className="text-center">{order.price}</td>
                      <td className="text-center">{order.category}</td>
                      <td className="text-center">{order.desc}</td>
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
                          {/* <li className="list-inline-item">
                            <button
                              className="btn btn-info btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to cart"
                              onClick={() => handleDelete(order._id)}
                            >
                              <i className="bi bi-cart"></i>
                            </button>
                          </li> */}
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
    // </div>
  );
});

export default BuyerOrderTable;
