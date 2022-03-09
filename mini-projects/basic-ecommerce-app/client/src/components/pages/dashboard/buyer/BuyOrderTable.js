import React from "react";

import {
  getBuyOrdersDB,
  deleteBuyOrder,
} from "../../../../services/BuyOrderService";

export const DATA_PACKAGE_TYPE = {
  DEVICE_LOCATION: "Device Location",
  DEVICE_BEHAVIOR: "Device Behavior",
  ID_MAPPING: "ID Mapping",
};

const BuyOrderTable = React.memo(function BuyOrderTable({ onEdit }) {
  const [buyOrders, setBuyOrders] = React.useState([
    {
      _id: 123123,
      name: "shahjahan",
      maxBidPrice: 4000,
      dataPackageType: DATA_PACKAGE_TYPE.DEVICE_BEHAVIOR,
    },
    {
      _id: 34444,
      name: "sarmad",
      maxBidPrice: 500,
      dataPackageType: DATA_PACKAGE_TYPE.ID_MAPPING,
    },
    {
      _id: 22222,
      name: "shahid",
      maxBidPrice: 5000,
      dataPackageType: DATA_PACKAGE_TYPE.DEVICE_LOCATION,
    },
  ]);

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
    onEdit(order);
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-11 col-xl-12 mx-auto">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-2">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" class="text-center text-nowrap ">
                        Name
                      </th>
                      <th scope="col" class="text-center text-nowrap">
                        Max Bid Price
                      </th>
                      <th scope="col" class="text-center text-nowrap">
                        Data Package Type
                      </th>
                      <th scope="col" class="text-center text-nowrap">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {buyOrders.map((order) => (
                      <tr key={order._id}>
                        <td class="text-center">{order.name}</td>
                        <td class="text-center">{order.maxBidPrice}</td>
                        <td class="text-center">{order.dataPackageType}</td>
                        <td class="text-center">
                          <ul class="list-inline m-0">
                            {/* <li class="list-inline-item">
                           <button
                             class="btn btn-primary btn-sm"
                             type="button"
                             data-toggle="tooltip"
                             data-placement="top"
                             title="Add"
                           >
                             <i class="bi bi-plus-circle"></i>
                           </button>
                         </li> */}
                            <li class="list-inline-item">
                              <button
                                class="btn btn-success btn-sm"
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
                                onClick={() => handleEdit(order)}
                              >
                                <i class="bi bi-pencil"></i>
                              </button>
                            </li>
                            <li class="list-inline-item">
                              <button
                                class="btn btn-danger btn-sm "
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                                onClick={() => handleDelete(order._id)}
                              >
                                <i class="bi bi-trash"></i>
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
    </div>
  );
});

export default BuyOrderTable;
