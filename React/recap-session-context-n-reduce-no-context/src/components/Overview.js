import { useNavigate } from "react-router-dom";
import CartList from "./CartList";

const Overview = ({
  cart,
  firstName,
  lastName,
  address,
  zip,
  city,
  shipping,
  payment
}) => {
  const navigate = useNavigate();
  const calculateCart = cart.reduce((acc, curr) => {
    return curr.onSale
      ? acc + curr.price * curr.qty - (curr.price * curr.qty) / 10
      : acc + curr.price * curr.qty;
  }, 0);

  return (
    <main className="overviewMain">
      <h1>Confirm your order</h1>
      {cart.map((product) => (
        <CartList key={crypto.randomUUID()} overview {...product} />
      ))}
      <section className="settingsOverview">
        <div>
          <h3>Your details</h3>
          <ul>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{address}</li>
            <li>{zip}</li>
            <li>{city}</li>
          </ul>
        </div>
        <div>
          <p>
            Shipping carrier: <span>{shipping}</span>
          </p>
          <p>
            Payment method: <span>{payment.replace("_", " ")}</span>
          </p>
          <p>
            Total: <span>€{calculateCart.toFixed(2)}</span>
          </p>
        </div>
      </section>
      <div className="backNextWrapper">
        <button className="backBtn" onClick={() => navigate(-1)}>
          Back
        </button>
        <button
          className="nextBtn"
          onClick={() => {
            navigate("/checkout/confirmation");
          }}
        >
          Pay Now
        </button>
      </div>
    </main>
  );
};

export default Overview;
