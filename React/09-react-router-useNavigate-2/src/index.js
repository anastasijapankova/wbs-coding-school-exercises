import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import ShoppingCart from './components/shoppingCart';
import { Checkout } from './components/checkout'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </BrowserRouter >
);

