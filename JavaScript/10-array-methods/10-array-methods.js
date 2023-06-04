/**
 * 01 Create a function printArrayElements that takes an array as a parameter and prints each element to the console using forEach.
* 
* Example usage: printArrayElements([1, 2, 3, 4, 5]); // Output: 1 2 3 4 5
*
*/

function printArrayElements(array) {
  array.forEach((element) => {
    console.log("output: ", element);
  });
}

printArrayElements(['apple', 'banana', 'orange']);

/**
 * 
 * 02 Create a function doubleArrayElements that takes an array as a parameter and doubles each element using forEach.
 * 
 * 
 * Example usage: doubleArrayElements([1, 2, 3, 4, 5]); // Output: [2, 4, 6, 8, 10]
 * 
 */

function doubleArrayElements(array) {
  array.forEach((element, i, array) => {
    array[i] = element * 2;
  });
  return array;
}

console.log('multiplied output: ', doubleArrayElements([1, 2, 3, 4, 5]));

/**
 * 
 * 03 Create a function countWords that takes an array of strings and counts the number of words in each string using forEach.
 * 
 * Example usage: countWords(["hello world", "goodbye", "how are you?"]); // Output: [2, 1, 3]
 * 
 */

function countWords1(array) {
  const result = [];
  array.forEach((string) => {
    const words = string.split(" ");
    result.push(words.length);
  });
  return result;
}

console.log('number of words: ', countWords1(["hello world", "goodbye", "how are you?"]));


/**
 * 04 Create a function filterEvens that takes an array of numbers and returns a new array with only the even numbers using filter
 * 
 * Example usage: filterEvens([1, 2, 3, 4, 5]); // Output: [2, 4]
 * 
 */

function filterEvens(array) {
  return array.filter((element) => element % 2 === 0);
}

console.log('even numbers from array: ', filterEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * 05 Create a function filterLongWords that takes an array of strings and returns a new array with only the strings that have more than 5 characters using filter
 * 
 * Example usage: filterLongWords(["hello", "world", "goodbye", "hi"]); // Output: ["goodbye"]
 * 
 */

function filterLongWords(array) {
  return array.filter((element) => element.length > 5);
}

console.log(filterLongWords(["hello", "world", "goodbye", "hi"]));

/**
 * 06 Create a function squareArrayElements that takes an array of numbers and returns a new array with the squared values using map
 * 
 * Example usage: squareArrayElements([1, 2, 3, 4, 5]); // Output: [1, 4, 9, 16, 25]
 * 
 */

function squareArrayElements(array) {
  return array.map((element) => element * element);
}

console.log(squareArrayElements([1, 2, 3, 4, 5]));



/**
 * 07 Create a function capitalizeWords that takes an array of strings and returns a new array with each word capitalized using map
 * 
 * Example usage: capitalizeWords(["hello", "world", "goodbye"]); // Output: ["Hello", "World", "Goodbye"]
 * 
 */

function capitalizeWords(array) {
  return array.map((element) => {

    const firstLetter = element.charAt(0).toUpperCase();

    const restLetters = element.slice(1).toLowerCase();

    return firstLetter + restLetters;

  });
}

console.log('capitalizer words: ', capitalizeWords(["hello", "world", "goodbye"]));


/**
 * 08 Create a function calculatePrices that takes an array of products with a price and quantity property and returns a new array with the total cost of each product using map
 * 
 * Example usage: calculatePrices([
  { name: "apple", price: 0.5, quantity: 3 },
  { name: "banana", price: 0.25, quantity: 5 }]); 
  // Output: [{ name: "apple", totalCost: 1.5 }, { name: "banana", totalCost: 1.25 }]
 * 
 */

function calculatePrices(array) {
  return array.map((product) => {
    return {
      name: product.name,
      totalCost: product.price * product.quantity,
    }
  });
}

console.log("invoice: ", calculatePrices([
  { name: "apple", price: 0.5, quantity: 3 },
  { name: "banana", price: 0.25, quantity: 5 }
]));


/**
 * 09 Create a function sumArrayElements that takes an array of numbers and returns the sum of all the elements using reduce
 * 
 * 
 * Example usage: sumArrayElements([1, 2, 3, 4, 5]); // Output: 15
 * 
 */

function sumArrayElements(array) {
  return array.reduce((accumulator, item) => accumulator + item, 0);
}

console.log(sumArrayElements([1, 2, 3, 4, 5]));


/**
 * 10 Create a function countWords that takes an array of strings and returns the total number of words using reduce
 * 
 * Example usage: countWords(["hello world", "goodbye", "how are you?"]); // Output: 6
 * 
 */

function countWords(array) {
  return array.reduce((accumulator, string) => {
    const words = string.split(' ');
    return accumulator + words.length;
  }, 0);

}

console.log(countWords(["hello world", "goodbye", "how are you?"]));

/**
 * 11 Create a function calculateAverage that takes an array of numbers and returns the average value using reduce
 * 
 * 
 * Example usage: calculateAverage([1, 2, 3, 4, 5]); // Output: 3
 * 
 */

function calculateAverage(array) {
  return array.reduce((accumulator, value) => accumulator += value, 0) / array.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));


/**
 * 12 Create a function findIndexGreaterThan that takes an array of numbers and a number n as parameters and returns the index of the first element that is greater than n using findIndex
 * 
 * Example usage: findIndexGreaterThan([1, 2, 3, 4, 5], 3); // Output: 3
 * 
 */

function findIndexGreaterThan(array, n) {
  return array.findIndex((element) => element > n);
}

console.log('greater than n: ', findIndexGreaterThan([1, 2, 3, 4, 5], 3));


/**
 * 13 Create a function findIndexByProperty that takes an array of objects and a property p and value v as parameters and returns the index of the first object that has the property p equal to v using findIndex
 * 
 * Example usage:
findIndexByProperty(
  [
    { name: "apple", price: 0.5 },
    { name: "banana", price: 0.25 },
    { name: "orange", price: 0.75 },
  ],  "price", 0.25 ); // Output: 1
 * 
 */

function findIndexByProperty(array, price, value) {
  return array.findIndex((element) => element[price] === value);
}

console.log('price is matching: ', findIndexByProperty(
  [
    { name: "apple", price: 0.5 },
    { name: "banana", price: 0.25 },
    { name: "orange", price: 0.75 },
  ],
  "price", 0.25
));

/**
 * 14 Create a function findIndexBySubstring that takes an array of strings and a substring s as parameters and returns the index of the first string that contains the substring s using findIndex
 * 
 * Example usage: findIndexBySubstring(["hello", "world", "goodbye"], "llo"); // Output: 0
 * 
 */

function findIndexBySubstring(array, substring) {
  return array.findIndex((element) => element.includes(substring));
}

console.log('includes: ', findIndexBySubstring(["hello", "world", "goodbye"], "llo"));