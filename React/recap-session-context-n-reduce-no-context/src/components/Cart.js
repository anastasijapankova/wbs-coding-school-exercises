import { useNavigate } from "react-router-dom";
import CartList from "./CartList";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  return (
    <main className="cartMain">
      <h1>Your shopping cart</h1>
      <CartList top />
      {cart.length ? (
        cart.map((item) => (
          <CartList
            key={crypto.randomUUID()}
            {...item}
            cart={cart}
            setCart={setCart}
          />
        ))
      ) : (
        <p className="emptyCart">Your cart is currently empty</p>
      )}
      <button
        className="checkOut"
        onClick={() => navigate("/checkout")}
        disabled={!cart.length && true}
      >
        Check out
      </button>
    </main>
  );
};

export default Cart;
