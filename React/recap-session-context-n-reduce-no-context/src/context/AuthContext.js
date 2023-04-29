import { useState, useEffect, createContext } from "react";
import { getProducts } from "../utils";

export const AppContextObj = createContext();

const AuthContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState({
    firstName: "",
    lastName: "",
    address: "",
    zip: "",
    city: "",
    shipping: "DHL",
    payment: "Credit_Card"
  });
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <AppContextObj.Provider
      value={{ cart, setCart, checkout, setCheckout, products, setProducts }}
    >
      {children}
    </AppContextObj.Provider>
  );
};

export default AppContextComponent;
