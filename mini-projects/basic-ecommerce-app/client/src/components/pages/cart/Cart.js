import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../../features/CartSlice";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart, "cart...................");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (cartItem) => {
    console.log(cartItem, "cartItem.............................");
    dispatch(addToCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
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
                  {/* <img src={cartItem.image} alt={cartItem.name} /> */}
                  <div>
                    <h3>{cartItem.name}</h3>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      <i className="bi bi-trash text-danger">Remove Item</i>
                    </button>
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
              <button>Pay And Checkout</button>
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
};

export default Cart;
