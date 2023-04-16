import React from 'react';
import './App.css';
import { Header } from './components/header'
import { Product } from './components/product'
import { Card } from './components/card'

function App() {

  return (
    <div >
      <Header />
      <Card title="Best Sellers" />
    </div >
  );
}

export default App;
