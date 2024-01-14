/**
 * Create the wishlist functionality of an eshop that is selling vitamins.
 * (only the JS part)
 * Create the wishlist as an array of objects where each object contains
 * the product id and the user name.
 *
 * Create another array of objects to contain the products' information.
 * Each object should contain an  id, product name, product desciption, price and image url
 *
 * The user should be able to press a button on the product card
 * and the specific product should be added to a list of his favorite products.
 *
 * a) implement a function that adds the product id along with the user name to the wishlist array
 *
 * The color of the button should change color.
 *
 * When the button with the new color is pressed again,
 * then this product should be removed from his whishlist.
 * b) implement a function that removes the specific product from the wishlist array
 *
 * When the user visits his favorites page,
 * then he should able to see a list of his whishlisted products.
 * (The list should contain all product details such as description,
 * price, images etc)
 * c) implement a function that lists all the products that their ids are contained in the wishlist for the specific user
 * Output should be like:
 *
 * For user george here is the wishlist:
 * - D3 5000 iu
 *   Takes care of your immune system
 *   Price: 10€
 *   <img src='http://example.com/1/>
 *
 * Optional:
 * Provide another implemention:
 * user's wishlist is stored as an array in the user object
 */

// Data
const products = [
  {
    // 1
    id: 1,
    name: "D3 5000 iu",
    description: "Takes care of your immune system",
    price: 10,
    image: "http://example.com/1",
  },
  {
    // 2
    id: 2,
    name: "C 1000mg",
    description: "180 tabs of vitamin C with Bioflanoids",
    price: 3,
    image: "http://example.com/23",
  },
  {
    // 3
    id: 3,
    name: "B - Complex 50 mg",
    description: "Balanced mix of all basic B vitamins",
    price: 12,
    image: "http://example.com/44",
  },
  {
    // 4
    id: 4,
    name: "Cal-Mag",
    description: "Calcium and Magnesium in the proper analogy",
    price: 15,
    image: "http://example.com/123",
  },
  {
    // 5
    id: 5,
    name: "E 400iu",
    description: "Best for skin issues",
    price: 10,
    image: "http://example.com/456",
  },
];

const wishlist = [
  {
    user: "alkis",
    productId: 1,
  },
  {
    user: "alkis",
    productId: 2,
  },
  {
    user: "george",
    productId: 1,
  },
];

// a) implement a function that adds the product id along with the user name to the wishlist array

function toggleProduct(array, item) {
  
  for (let i = 0; i < array.length; i++) {
    if (array[i].user === item.user && array[i].productId === item.productId) {
      array.splice(i, 1)
      return
    }
  }

  // if program execution reached this point, it means that the item was not found
  array.push(item);
}

toggleProduct(wishlist, { user: "alkis", productId: 3 }); // add a new product
console.log(wishlist);
toggleProduct(wishlist, { user: "alkis", productId: 3 }); // add an existing product
console.log(wishlist);
toggleProduct(wishlist, { user: "alkis", productId: 4 }); // add another product
console.log(wishlist);

// b) implement a function that removes the specific product from the wishlist array
function deleteProduct(array, user, productId) {
  let idx = -1;

  for (let i = 0; i < array.length; i++) {

    if (array[i].user === user && array[i].productId === productId) idx = i;
  }

  if (idx > -1) array.splice(idx, 1);
}

deleteProduct(wishlist, "alkis", 1);
console.log(wishlist);

// c) implement a function that lists all the products that their ids are contained in the wishlist
// for the specific user

function listItems(whishlistArray, productsArray, user) {
  console.log(`For user ${user} here is the wishlist:`);

  for (let item of whishlistArray) {

    if (item.user === user) {
      
      for (let product of productsArray) {

        if (product.id === item.productId) {
          
          console.log(`- ${product.name} `);
          console.log(`  ${product.description} `);
          console.log(`  Price: ${product.price}€`);
          console.log(`  <img src='${product.image}/> `);
        }
      }
    }
  }
}

listItems(wishlist, products, "alkis");
listItems(wishlist, products, "george");
