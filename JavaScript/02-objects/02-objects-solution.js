// 01

const blogPosts = [
  {
    id: 1,
    title: "The AI in military",
    text: `And when the time he was in front of the army were cut short.

        The horse would have been trampled to pieces,
        
        And the men who would have been killed, and the whole town would have been burned.
        
        But I have been there, and we are done, for the king has gone forward,
        
        And if he is still in front of us, it says that it is time for him to see it again.
        
        Now let us come back to the place,
        
        For our own sake I will take an oath.
        
        Then shall we come back and lay hands on their bodies,
        
        And all that has no other will be eaten
        
        And there will be a thousand thousand more people to be massacred.
        
        Now let us go and lay hands on theirs.`,
    author: "deepai.org",
    description: "text generated from a machine in deepai.org",
    comments: ["Awesome posts, thanks!", "Cannot agree more"],
  },
  {
    id: 2,
    title: "A garden in Babylon",
    text: `As a result, the first of the ten disciples of Samaria, 
        called the "Tray-Bearer of Wisdom," was known by her as the 
        "Empire of the Tungis." 
        The Tungis are the divine spirits of the Dead and of the Prophets. 
        She taught these beings that in every person who does not know any of them,
         all they can do is to look for a spirit that has been placed at the root 
         of any man's estate. She even stated this to the Prophet Joseph.`,
    author: "deepai.org",
    description: "text generated from a machine in deepai.org",
    comments: ["Amazed wow!", "I dislike that"],
  },
];

function searchText(array, text) {
  const results = [];

  array.forEach((item) => {
    if (
      item.title.includes(text) ||
      item.text.includes(text) ||
      item.description.includes(text)
    )
      results.push(item);
  });

  return results.length ? results : "No matching posts found";
}

console.log(searchText(blogPosts, "pieces"));
console.log(searchText(blogPosts, "not in a million"));

function editPost(array, postId, field, value) {
  let idx = -1;

  array.forEach((item, index) => {
    if (item.id === postId) idx = index;
  });

  if (idx < 0) return "Post not Found";

  array[idx][field] = value;

  return array[idx];
}

console.log(editPost(blogPosts, 1, "title", "The AI in the garden"));
console.log(editPost(blogPosts, 1, "author", "alkas"));
console.log(editPost(blogPosts, 3, "author", "alkas"));

function deletePost(array, postId) {
  let idx = -1;

  array.forEach((item, index) => {
    if (item.id === postId) idx = index;
  });

  return idx > -1 ? array.splice(idx, 1) : array;
}

console.log(deletePost(blogPosts, 33));
console.log(deletePost(blogPosts, 2));

function displayComments(array, postId) {
  let idx = -1;

  array.forEach((item, index) => {
    if (item.id === postId) idx = index;
  });

  array[idx].comments.forEach((comment) => console.log(comment));
}

displayComments(blogPosts, 1);

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

function addProduct(array, item) {
  array.push(item);
}

addProduct(wishlist, { user: "alkis", productId: 3 });
console.log(wishlist);

// b) implement a function that removes the specific product from the wishlist array
function deleteProduct(array, user, productId) {
  let idx = -1;

  array.forEach((item, index) => {
    if (item.user === user && item.productId === productId) idx = index;
  });

  if (idx > -1) array.splice(idx, 1);
}

deleteProduct(wishlist, "alkis", 1);
console.log(wishlist);

// c) implement a function that lists all the products that their ids are contained in the wishlist
// for the specific user

function listItems(whishlistArray, productsArray, user) {
  console.log(`For user ${user} here is the wishlist:`);
  whishlistArray.forEach((item) => {
    if (item.user === user) {
      productsArray.forEach((product, index) => {
        if (product.id === item.productId) {
          console.log(`- ${product.name} `);
          console.log(`  ${product.description} `);
          console.log(`  Price: ${product.price}€`);
          console.log(`  <img src='${product.image}/> `);
        }
      });
    }
  });
}

listItems(wishlist, products, "alkis");
listItems(wishlist, products, "george");
