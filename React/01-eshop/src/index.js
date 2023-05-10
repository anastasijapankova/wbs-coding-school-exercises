import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import { AddNewProduct } from './components/addnewproduct';
import { Contact } from './components/contact';
import { Header } from './components/header'
import CartFunctionContext from './components/cartContext'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartFunctionContext>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-new-product" element={<AddNewProduct />} />
      </Routes>
    </CartFunctionContext>
  </BrowserRouter>
);

