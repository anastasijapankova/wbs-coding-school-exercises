const CartList = ({
  top = false,
  overview = false,
  id,
  title,
  image,
  price,
  qty,
  onSale,
  cart,
  setCart
}) => {
  const removeItem = () => setCart(cart.filter((product) => product.id !== id));

  return (
    <div className={top ? "cartList topCartList" : "cartList"}>
      {top ? (
        <>
          <p></p>
          <p>Title</p>
          <p className="bar"></p>
          <p>Price</p>
          <p className="bar"></p>
          <p>Quantity</p>
          {!overview && <p></p>}
        </>
      ) : (
        <>
          <img src={image} alt={title} />
          <p>{title}</p>
          <p className="bar"></p>
          <p>
            €
            {onSale
              ? (price * qty - (price * qty) / 10).toFixed(2)
              : price * qty}
          </p>
          <p className="bar"></p>
          <p>{qty}</p>
          {!overview ? (
            <button className="removeCart" onClick={removeItem}>
              Remove
            </button>
          ) : (
            <p style={{ display: "none" }}></p>
          )}
        </>
      )}
    </div>
  );
};

export default CartList;
