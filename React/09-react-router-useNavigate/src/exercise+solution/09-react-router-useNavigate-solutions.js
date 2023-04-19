// 01

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
      setError(null);
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
  
}
export default LoginForm;

// 02
// ShoppingCart.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddItem = (item) => {
    setCart([...cart, item]);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div>Please add items to your cart.</div>
      ) : (
        <div>
          {/* Render the shopping cart items */}
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
