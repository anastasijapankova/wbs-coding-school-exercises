import { useNavigate } from "react-router-dom";
import {
  FaDhl,
  FaUps,
  FaFedex,
  FaCcPaypal,
  FaCcApplePay,
  FaCreditCard
} from "react-icons/fa";

const ShippingForm = ({ shipping, payment, setCheckout }) => {
  const navigate = useNavigate();

  const selection = (e) =>
    setCheckout((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <main>
      <form className="shippingForm">
        <fieldset className="shippingField">
          <legend>Select your shipping option</legend>
          <div className="labelDiv">
            <label htmlFor="DHL">
              DHL <FaDhl size="2.5em" />
            </label>
            <label htmlFor="UPS">
              UPS <FaUps size="1.5em" />
            </label>
            <label htmlFor="FedEx">
              FedEx <FaFedex size="2em" />
            </label>
          </div>
          <div className="inputDiv">
            <input
              type="radio"
              name="shipping"
              id="DHL"
              value="DHL"
              onChange={selection}
              checked={shipping === "DHL"}
            />
            <input
              type="radio"
              name="shipping"
              id="UPS"
              value="UPS"
              onChange={selection}
              checked={shipping === "UPS"}
            />
            <input
              type="radio"
              name="shipping"
              id="FedEx"
              value="FedEx"
              onChange={selection}
              checked={shipping === "FedEx"}
            />
          </div>
        </fieldset>
        <fieldset className="paymentField">
          <legend>Choose payment method</legend>
          <div className="labelDiv shippingLabel">
            <label htmlFor="Credit_Card">
              Credit Card
              <FaCreditCard size="1.5em" />
            </label>
            <label htmlFor="Apple_Pay">
              Apple Pay <FaCcApplePay size="1.5em" />
            </label>
            <label htmlFor="PayPal">
              PayPal <FaCcPaypal size="1.5em" />
            </label>
          </div>
          <div className="inputDiv">
            <input
              type="radio"
              name="payment"
              id="Credit_Card"
              value="Credit_Card"
              onChange={selection}
              checked={payment === "Credit_Card"}
            />
            <input
              type="radio"
              name="payment"
              id="Apple_Pay"
              value="Apple_Pay"
              onChange={selection}
              checked={payment === "Apple_Pay"}
            />
            <input
              type="radio"
              name="payment"
              id="PayPal"
              value="PayPal"
              onChange={selection}
              checked={payment === "PayPal"}
            />
          </div>
        </fieldset>
        <div className="backNextWrapper">
          <button onClick={() => navigate("/checkout")} className="backBtn">
            Back
          </button>
          <button
            onClick={() => navigate("/checkout/overview")}
            className="nextBtn"
          >
            Next
          </button>
        </div>
      </form>
    </main>
  );
};

export default ShippingForm;
