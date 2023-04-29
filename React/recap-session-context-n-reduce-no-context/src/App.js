import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import DetailsForm from "./components/DetailsForm";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Overview from "./components/Overview";
import ShippingForm from "./components/ShippingForm";


import { useState, useEffect } from "react";

export default function App() {
  return (
    <>
      <NavBar cart={cart} />
      <Routes>
        <Route
          index
          element={<Home products={products} cart={cart} setCart={setCart} />}
        />
        <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="checkout" element={<Checkout cart={cart} />}>
          <Route
            index
            element={<DetailsForm {...checkout} setCheckout={setCheckout} />}
          />
          <Route
            path="shipping"
            element={<ShippingForm {...checkout} setCheckout={setCheckout} />}
          />
          <Route
            path="overview"
            element={<Overview cart={cart} {...checkout} />}
          />
          <Route
            path="confirmation"
            element={
              <OrderConfirmation setCart={setCart} setCheckout={setCheckout} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
