/**
 * 01
 * Create a function that accepts a variable number of arguments and calculates their sum using the REST parameter syntax.
 * 
 * E.g. sum(1, 2, 3, 4, 5)); // Output: 15
 */

function sum(...items) {
    return items.reduce((total, value) => total + value, 0)
}

console.log(sum(1, 2, 3, 4, 5))
console.log('********** One')


/**
 * 02
 * Merge two arrays using spread operator
 *
 * E.g. mergedArray([1, 2, 3], [4, 5, 6]); // Output: [1, 2, 3, 4, 5, 6]
 */

const numbers1 = [1, 2, 3]
const numbers2 = [4, 5, 6]
const numbersMerged = [...numbers1, ...numbers2]

console.log(numbersMerged)
console.log('********** Two')


/**
 * 03
 *  Create a function that concatenates a variable number of strings using the spread operator.
 *
 * concatenateStrings(" - ", "Hello", "world", "from", "Rest"); // Output: "Hello - world - from - Rest"
 */

function concatenateStrings(separator, ...strings) {
    return strings.join(separator)
}

const result = concatenateStrings(" - ", "Hello", "world", "from", "Rest");
console.log(result)
console.log('********** Three')

/**
 * 04
 * Create a function that accepts an arbitrary number of objects as input and combines them into a new object.
 * Students should use the spread operator to combine properties from all input objects.
 * If there are conflicting properties, the function should give priority to the properties of the later objects in the argument list.
 *
 * combinedObject({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }) // Output: { a: 1, b: 3, c: 4, d: 5 }
 */

function combineObjects(...objects) {
    return objects.reduce((result, current) => {
        return { ...result, ...current };
    }, {});
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const combinedObject = combineObjects(obj1, obj2, obj3);
console.log(combinedObject);


console.log('********** Four')


/**
 * 05
 * Create a function that accepts a variable number of arguments and returns the highest number using the REST parameter syntax.
 *
 * findHighest(1, 2, 3, 4, 5); // Output: 5
 */

const arrayOne = []

function findHighest(...items) {

    console.log(items)
    arrayOne.push(...items) // adds all the numbers in the arrayOne

}

findHighest(1, 2, 3, 4, 5)
console.log(arrayOne)
console.log(Math.max(...arrayOne)) // find the higest number in the arrayOne
console.log('********** Five')

/**
 * 06
 * Write a function that takes two arrays as input, merges them using the spread operator, and removes duplicates from the merged array without modifying the original arrays
 *
 *  mergeAndRemoveDuplicates([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]) // Output: [1, 2, 3, 4, 5, 6, 7, 8]
 *
 */

const line1 = [1, 2, 3, 4, 5];
const line2 = [4, 5, 6, 7, 8];
const linesMerged = [...line1, ...line2]

let uniqueLine = [...new Set(linesMerged)];
console.log(uniqueLine);

console.log(linesMerged);
console.log('********** Six')

/**
 * 07
 * Create a function that updates the property of an object without modifying the original object
 *
 * updateProperty({ a: 1, b: 2 }, 'b', 3) // Output: { a: 1, b: 3 }
 *
 */

function updateProperty(object, key, value) {
    return { ...object, [key]: value }
}

const initialObj = { a: 1, b: 2 };
const updatedObj = updateProperty(initialObj, 'b', 3)

console.log(initialObj)
console.log(updatedObj)
console.log('********** Seven')

/**
 * 08
 * Write a function that removes duplicates from an array using the REST parameter syntax and the Set data structure
 * 
 * removeDuplicates(1, 2, 3, 1, 2, 3, 4, 5, 6); // Output: [1, 2, 3, 4, 5, 6]
 * 
 * TIP: explore what is a SET is Javascript
 */


function removeDuplicates(...num) {
    return [...new Set(num)];
}

console.log(removeDuplicates(1, 2, 3, 1, 2, 3, 4, 5, 6));
console.log('********** Eight')