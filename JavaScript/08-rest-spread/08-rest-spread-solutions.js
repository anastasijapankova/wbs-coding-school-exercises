// 01
function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// 02

function mergeArrays(array1, array2) {
    return [...array1, ...array2];
  }
  
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  
  const mergedArray = mergeArrays(arr1, arr2);
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// 03

function concatenateStrings(separator, ...strings) {
    return strings.join(separator);
  }
  
const result = concatenateStrings(" - ", "Hello", "world", "from", "Rest");
console.log(result); // Output: "Hello - world - from - Rest"

// 04

function combineObjects(...objects) {
    return objects.reduce((result, current) => {
      return { ...result, ...current };
    }, {});
  }
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const obj3 = { d: 5 };
  
  const combinedObject = combineObjects(obj1, obj2, obj3);
  console.log(combinedObject); // Output: { a: 1, b: 3, c: 4, d: 5 } 

// 05

function findHighest(...args) {
    return Math.max(...args);
  }
  
console.log(findHighest(1, 2, 3, 4, 5)); // Output: 5

// 06

function mergeAndRemoveDuplicates(array1, array2) {
    return [...new Set([...array1, ...array2])];
  }
  
  const arr61 = [1, 2, 3, 4, 5];
  const arr62 = [4, 5, 6, 7, 8];
  
  const mergedArray6 = mergeAndRemoveDuplicates(arr61, arr62);
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// 07

function updateProperty(obj, key, value) {
    return { ...obj, [key]: value };
  }
  
const originalObj = { a: 1, b: 2 };
const updatedObj = updateProperty(originalObj, 'b', 3);

console.log(originalObj); // Output: { a: 1, b: 2 }
console.log(updatedObj); // Output: { a: 1, b: 3 }
  
// 08

function removeDuplicates(...args) {
    return [...new Set(args)];
  }
  
console.log(removeDuplicates(1, 2, 3, 1, 2, 3, 4, 5, 6)); // Output: [1, 2, 3, 4, 5, 6]