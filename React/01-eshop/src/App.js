import React, { useState } from 'react';
import './App.css';
import { Products } from './components/products'


function App() {

  // const [cart, setCart] = useState(0)

  // const increase = () => {
  //   setCart(cart + 1)
  // }


  return (
    <div >
      {/* <Products onClick={increase} /> */}
      <Products />
    </div >
  );
}

export default App;
