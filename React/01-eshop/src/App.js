import React, { useState } from 'react';
import './App.css';
import { Header } from './components/header'
import { Products } from './components/products'


function App() {

  const [cart, setCart] = useState(0)

  const increase = () => {
    setCart(cart + 1)
  }


  return (
    <div >
      <Header cart={cart} />
      <Products onClick={increase} />
    </div >
  );
}

export default App;
