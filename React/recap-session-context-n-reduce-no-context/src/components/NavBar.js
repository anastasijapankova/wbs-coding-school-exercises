import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { cart } = useAppContext();

  return (
    <header>
      <img
        className="logo"
        src="https://cdn.freewebstore.com/resize/227567/nodrill.gif/160/120/0/"
        alt="no drill logo"
        onClick={() => navigate("/")}
      />
      <nav>
        <ul className="navUl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="cartLink">
            {cart.length ? (
              <div className="cartCount">{cart.length}</div>
            ) : null}
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
