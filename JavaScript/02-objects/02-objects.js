/**
 * 01
 * Create an array with objects
 * 
 * Each object should contain all necessary data for a blog post
 * such as title, text, comments, author, description, id and others.
 * The array should have at least 3 blog posts
 * 
 * Create a function that will search a text in all text properties and
 * return the results in an array or the text 'No matching posts found' if there 
 * are no matching posts
 * 
 * Create a function that edits a given post. The user should be able to edit 
 * any object property he would like and should return the updated object
 * If the post is not found then the function should return 'Post not found'
 * 
 * create a function that deletes a post with a given id from the array 
 * and returns the updated array
 * 
 * create a function that displays the comments of a given post one per row
 */
// Sample Data
const blogPosts = [
    {
        id: 1,
        title: 'The AI in military',
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
        author: 'deepai.org',
        description: 'text generated from a machine in deepai.org',
        comments: ['Awesome posts, thanks!', 'Cannot agree more']
    },
    {
        id: 2, 
        title: 'A garden in Babylon',
        text: `As a result, the first of the ten disciples of Samaria, 
        called the "Tray-Bearer of Wisdom," was known by her as the 
        "Empire of the Tungis." 
        The Tungis are the divine spirits of the Dead and of the Prophets. 
        She taught these beings that in every person who does not know any of them,
         all they can do is to look for a spirit that has been placed at the root 
         of any man's estate. She even stated this to the Prophet Joseph.`,
        author: 'deepai.org',
        description: 'text generated from a machine in deepai.org',
        comments: ['Amazed wow!', 'I dislike that']
    }
]


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
// Sample Data
const products = [
    { // 1
        id: 1,
        name: "D3 5000 iu",
        description: 'Takes care of your immune system',
        price: 10,
        image: 'http://example.com/1'
    },
    { // 2
        id: 2,
        name: "C 1000mg",
        description: '180 tabs of vitamin C with Bioflanoids',
        price: 3,
        image: 'http://example.com/23'
    },
    { // 3
        id: 3,
        name: "B - Complex 50 mg",
        description: 'Balanced mix of all basic B vitamins',
        price: 12,
        image: 'http://example.com/44'
    },
    { // 4
        id: 4,
        name: "Cal-Mag",
        description: 'Calcium and Magnesium in the proper analogy',
        price: 15,
        image: 'http://example.com/123'
    },
    { // 5
        id: 5,
        name: "E 400iu",
        description: 'Best for skin issues',
        price: 10,
        image: 'http://example.com/456'
    }
]

const wishlist = [
    {
        user: 'alkis',
        productId: 1
    },
    {
        user: 'alkis',
        productId: 2
    },
    {
        user: 'george',
        productId: 1
    }
]