import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const OrderConfirmation = ({ setCart, setCheckout }) => {
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setPaid(true), 2500);
    return () => {
      setCart([]);
      setCheckout({
        firstName: "",
        lastName: "",
        address: "",
        zip: "",
        city: "",
        shipping: "DHL",
        payment: "Credit_Card"
      });
      return clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      {!paid ? (
        <>
          <h1>Processing payment</h1>
          <FaSpinner className="spinner" size={"1.5em"} />
        </>
      ) : (
        <>
          <h1>Order placed!</h1>
          <div className="orderConfirmed">
            <p>
              Order <span>#{Math.ceil(Math.random() * 100000)}</span> confirmed!
              An e-mail has been sent with all the details of your order!
            </p>
            <button onClick={() => navigate("/")} className="nextBtn">
              Browse more
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default OrderConfirmation;
