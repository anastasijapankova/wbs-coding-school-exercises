import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { data } from '../01-eshop-data'

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
        <>
            <div className='cart'>
                <h1>Cart: {cart.length} items</h1>
                {cart.length === 0 ? (
                    <div>Please add items to your cart.</div>
                ) : (
                    <div>
                        {/* Render the shopping cart items */}
                        <button className='checkout' onClick={handleCheckout}>Proceed to Checkout</button>
                    </div>
                )}

            </div>
            <div className='products'>
                {data.map((data, index) => (<li key={index}>
                    <div>
                        {data.name}
                    </div>
                    <div className='price'>
                        {data.price}€
                    </div>
                    <button onClick={handleAddItem} className='addBtn'>Add to the cart</button>
                </li>))}
            </div>
        </>
    );
}

export default ShoppingCart;
