import { useDispatch, useSelector } from "react-redux";
import "./Items.css";
// import { Navigate } from "react-router-dom";
import { addToCart } from "../../../features/CartSlice";
import { useGetAllProductsQuery } from "../../../services/ItemsApi";

const Products = () => {
  const { items: products, status } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    // <Navigate to="/cart" />;
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2 className="text-center">New Arrivals</h2>
          <div className="row">
            {data &&
              data?.map((item) => (
                <div className="col-12 col-sm-12 col-lg-3">
                  <div className="products">
                    <div key={item.id} className="product">
                      <h3>{item.title}</h3>

                      <div className="details">
                        <span>{item.author}</span>
                        <span className="price">${item.price}</span>
                      </div>
                      <button onClick={() => handleAddToCart(item)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Products;
