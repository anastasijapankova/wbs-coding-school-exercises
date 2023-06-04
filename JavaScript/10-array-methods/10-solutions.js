// 01
function printArrayElements(arr) {
  arr.forEach((element) => {
    console.log("01: ", element);
  });
}

printArrayElements([1, 2, 3, 4, 5]); // Output: 1 2 3 4 5

// 02

function doubleArrayElements(arr) {
  arr.forEach((element, index, array) => {
    array[index] = element * 2;
  });
  return arr;
}

console.log('02: ', doubleArrayElements([1, 2, 3, 4, 5])); // Output: [2, 4, 6, 8, 10]


// 03

function countWords03(arr) {
  const result = [];
  arr.forEach((string) => {
    const words = string.split(" ");
    result.push(words.length);
  });
  return result;
}

console.log('03: ', countWords03(["hello world", "goodbye", "how are you?"])); // Output: [2, 1, 3]

// 04

function filterEvens(arr) {
  return arr.filter((element) => element % 2 === 0);
}

console.log('04: ', filterEvens([1, 2, 3, 4, 5])); // Output: [2, 4]

// 05

function filterLongWords(arr) {
  return arr.filter((string) => string.length > 5);
}

console.log('05: ', filterLongWords(["hello", "world", "goodbye", "hi"])); // Output: ["goodbye"]

// 06

function squareArrayElements(arr) {
  return arr.map((element) => element ** 2);
}

console.log('06: ', squareArrayElements([1, 2, 3, 4, 5])); // Output: [1, 4, 9, 16, 25]

// 07

function capitalizeWords(arr) {
  return arr.map((element) => {

    const firstLetter = element.charAt(0).toUpperCase();

    const restOfWord = element.slice(1).toLowerCase();

    return firstLetter + restOfWord;

  });
}

console.log('07: ', capitalizeWords(["hello", "world", "goodbye"])); // Output: ["Hello", "World", "Goodbye"]

// 08

function calculatePrices(arr) {
  return arr.map((product) => {
    return {
      name: product.name,
      totalCost: product.price * product.quantity,
    };
  });
}

console.log('08: ', calculatePrices([
  { name: "apple", price: 0.5, quantity: 3 },
  { name: "banana", price: 0.25, quantity: 5 },
])); // Output: [{ name: "apple", totalCost: 1.5 }, { name: "banana", totalCost: 1.25 }]

// 09

function sumArrayElements(arr) {
  return arr.reduce((accumulator, element) => accumulator + element, 0);
}

console.log('09: ', sumArrayElements([1, 2, 3, 4, 5])); // Output: 15

// 10

function countWords(arr) {
  return arr.reduce((accumulator, string) => {
    const words = string.split(" ");
    return accumulator + words.length;
  }, 0);
}

console.log('10: ', countWords(["hello world", "goodbye", "how are you?"])); // Output: 6

// 11

function calculateAverage(arr) {
  const sum = arr.reduce((accumulator, element) => accumulator + element, 0);
  return sum / arr.length;
}

console.log('11: ', calculateAverage([1, 2, 3, 4, 5])); // Output: 3


// 12

function findIndexGreaterThan(arr, n) {
  return arr.findIndex((element) => element > n);
}

console.log('12: ', findIndexGreaterThan([1, 2, 3, 4, 5], 3)); // Output: 3

// 13

function findIndexByProperty(arr, p, v) {
  return arr.findIndex((element) => element[p] === v);
}

console.log('13: ', findIndexByProperty(
  [
    { name: "apple", price: 0.5 },
    { name: "banana", price: 0.25 },
    { name: "orange", price: 0.75 },
  ],
  "price", 0.25
)); // Output: 1


// 14

function findIndexBySubstring(arr, s) {
  return arr.findIndex((element) => element.includes(s));
}

console.log('14: ', findIndexBySubstring(["hello", "world", "goodbye"], "llo")); // Output: 0
