import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./dashboard.css";
// import { Navigate } from "react-router-dom";
import { addToCart } from "../../../features/CartSlice";
// import { ItemsFetch } from "../../../features/ItemsSlice";

const Items = () => {
  const [itemData, setItemData] = React.useState([]);
  const dispatch = useDispatch();
  // const { item } = useSelector((state) => state.items);

  useEffect(() => {
    const ItemsFetch = async () => {
      try {
        const response = await axios.get("http://localhost:5000/items");
        setItemData(response.data);
      } catch (error) {}
    };
    ItemsFetch();
  }, []);

  return (
    <div className="row mt-3">
      {itemData.map((item) => (
        <div className="col-12 col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body text-center">
              <div className="d-flex justify-content-between">
                <div className="">
                  <h5 class="card-title">{item.name}</h5>
                </div>
                <div className="">
                  <h5 class="card-title">{item.price}</h5>
                </div>
              </div>
              <p className="">{item.desc}</p>
              <div className="d-flex justify-content-between">
                <div className="">
                  <div>{item.category}</div>
                </div>
                <div>
                  <button
                    class="btn btn-primary"
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
};

export default Items;
