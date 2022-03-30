import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
} from "../../../features/CartSlice";
// Service
import { createOrder } from "../../../services/OrderService";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCreateOrder = async () => {
    let name = cart.name;
    let balance = cart.cartTotalAmount;
    let orderitems = cart.cartItems;
    let buyerId = user.buyer._id;

    const response = await createOrder({
      name,
      balance,
      orderitems,
      buyerId,
    });

    if (response?.status !== 200) {
      console.log(`Error: ${response.status} : ${response.statusText}`);
      return;
    } else {
      toast.success("Order created successfully");
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/dashboard">
              <i className="bi bi-arrow-left"></i>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Name</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>
                      Description :{" "}
                      <span className="text-info">{cartItem.desc}</span>
                    </p>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleAddToCart(cartItem)}>+</button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <div
                className="continue-shopping"
                onClick={() => handleCreateOrder()}
              >
                <Link to="">
                  <button>Pay And Checkout</button>
                </Link>
              </div>
              <div className="continue-shopping">
                <Link to="/dashboard">
                  <i className="bi bi-arrow-left"></i>

                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
