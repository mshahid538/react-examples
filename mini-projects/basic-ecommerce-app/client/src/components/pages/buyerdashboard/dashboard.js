import React from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../../../services/ItemService";
import { addToCart } from "../../../features/CartSlice";
import "./dashboard.css";

function Items() {
  const dispatch = useDispatch();
  const [itemData, setItemData] = React.useState([]);

  React.useEffect(() => {
    getItemsDb();
  }, [itemData]);

  const getItemsDb = async () => {
    const res = await getItems();
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

export default Items;
