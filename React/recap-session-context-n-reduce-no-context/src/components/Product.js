import { useState } from "react";

const Product = ({
  product,
  product: { id, title, image, price },
  cart,
  setCart
}) => {
  const [amount, setAmount] = useState(1);
  const [onSale] = useState(price > 100 ? true : false);

  const putInCart = (id, product) => {
    const copyCart = [...cart];
    const findinCart = copyCart.findIndex((product) => product.id === id);
    if (findinCart === -1)
      copyCart.push({ ...product, qty: amount, onSale: onSale });
    else
      copyCart[findinCart] = {
        ...product,
        qty: cart[findinCart].qty + amount,
        onSale: onSale
      };
    return setCart(copyCart);
  };

  return (
    <div className="card">
      {onSale && <p className="onSale">10% off!</p>}
      <div className="imgWrapper">
        <img src={image} alt="" />
      </div>
      <div className="textWrapper">
        <h3>{title}</h3>
        <div className="priceWrapper">
          <span className={onSale ? "onSalePrice" : ""}>
            €{onSale ? (price - price / 10).toFixed(2) : price}
          </span>
          {onSale && <span>€{price}</span>}
        </div>
        <div className="buttonWrapper">
          <button
            onClick={() => setAmount((prev) => prev - 1)}
            disabled={amount <= 1 && true}
          >
            -
          </button>
          <p>{amount}</p>
          <button onClick={() => setAmount((prev) => prev + 1)}>+</button>
        </div>
        <button className="addToCart" onClick={() => putInCart(id, product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
