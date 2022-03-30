import React from "react";
// redux
import { useDispatch } from "react-redux";
import { getBuyOrdersDB } from "../../../services/BuyerOrderService";
import { addToCart } from "../../../features/CartSlice";

function Dashboard() {
  const [itemData, setItemData] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getBuyOrders();
  }, [itemData]);

  const getBuyOrders = async () => {
    const res = await getBuyOrdersDB();
    setItemData(res.data);
  };

  return (
    <div className="row my-3">
      {itemData?.map((item) => (
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 py-2" key={item.name}>
          <div className="card">
            <div className="card-body text-center">
              <div className="d-flex justify-content-between">
                <div className="">
                  <h5 className="card-title">{item.name}</h5>
                </div>
                <div className="">
                  <h5 className="card-title">{item.price}</h5>
                </div>
              </div>
              <p className="">{item.desc}</p>
              <div className="d-flex justify-content-between">
                <div className="">
                  <div>{item.category}</div>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
