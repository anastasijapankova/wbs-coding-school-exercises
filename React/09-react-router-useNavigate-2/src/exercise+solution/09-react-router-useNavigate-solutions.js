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
