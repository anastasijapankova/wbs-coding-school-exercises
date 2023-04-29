export const getProducts = async (cb) => {
  try {
    const fetchProducts = await fetch("https://fakestoreapi.com/products");
    if (!fetchProducts.ok)
      throw new Error(
        `Getting products failed with a statos of ${fetchProducts.status}`
      );
    return cb(await fetchProducts.json());
  } catch (error) {
    console.error(error);
  }
};
