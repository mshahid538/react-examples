import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import { Navigate } from "react-router-dom";
import { addToCart } from "../../../redux/CartSlice";
import { useGetAllProductsQuery } from "../../../redux/ItemsApi";

const Products = () => {
  const { items: products, status } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // <Navigate to="/cart" />;
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2 className="text-center">New Arrivals</h2>
          <div className="row">
            {data &&
              data?.map((product) => (
                <div className="col-12 col-sm-12 col-lg-3">
                  <div className="products">
                    <div key={product.id} className="product">
                      <h3>{product.title}</h3>

                      <div className="details">
                        <span>{product.author}</span>
                        <span className="price">${product.price}</span>
                      </div>
                      <button onClick={() => handleAddToCart(product)}>
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
