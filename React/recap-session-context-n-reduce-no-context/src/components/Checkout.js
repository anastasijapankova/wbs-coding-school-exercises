import { Navigate, Outlet } from "react-router-dom";

const Checkout = ({ cart }) => {
  return cart.length ? <Outlet /> : <Navigate to="/" />;
};

export default Checkout;
