/**
 * 01 Display User Information
 * 
 * Create a component called UserInfo that accepts two props, name and age. 
 * The component should display the user's name and age in an appropriate format. 
 * In the parent component, use the UserInfo component and pass different sets of user 
 * information to create multiple instances.
 * 
 */

/**
 * 02 Styling with Props
 * 
 * Create a functional component called Box that accepts two props, color and size. 
 * The component should display a square div element with the given background color 
 * and size (width and height). 
 * In the parent component, use the Box component to create a set of differently colored 
 * and sized boxes.
 * 
 */

/**
 * 03 List Rendering Using Props
 * 
 * Create a component called GroceryList that accepts a prop called groceries. 
 * The component should receive an array of grocery items (as the one below) and display them as an unordered list. 
 * In the parent component, pass an array of grocery items to the GroceryList 
 * component and render it.
 * 
 */

const groceryItems = ["Milk", "Eggs", "Bread", "Butter"];

/**
 * 04 Nested Components with Props
 * 
 * Create three components called Parent, UserProfile and UserAddress. 
 * They are nested inside another like this:
 * 
 * Parent
 *   |--- UserProfile
 *          |-- UserAddress
 * 
 * 
 * The UserProfile component should accept two props, name and email, and the UserAddress
 * component should accept three props, street, city, and country. 
 * 
 * The UserProfile component should also render the UserAddress component by passing the
 * address props. 
 * In the parent component, use the UserProfile component to display user information,
 * including their address.
 * 
 */