import { Link } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="payment">
            <div className="payment_header">
              <div className="check">
                <i className="bi bi-check text-success"></i>
              </div>
            </div>
            <div className="content">
              <h1>Payment Success !</h1>
              <p>Thank You For Your Order! As well as trust on us!</p>
              <Link to="/dashboard">Want to Buy More..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
