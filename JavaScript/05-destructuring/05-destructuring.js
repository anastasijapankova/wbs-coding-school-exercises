/**
 * 01
 * Get a list of elements that exist in both arrays
 */

function bothArrays(a, ...b) {
    return a + b
}

bothArrays([1, 2, 3], [4, 5, 6])
console.log([1, 2, 3], [4, 5, 6])

/**
 * 02
 * Write a JavaScript function to create an object from an array, using the specified key 
 * and excluding it from each value.
 * Use Array.prototype.reduce() to create an object from arr.
 * Use object destructuring to get the value of the given key 
 * and the associated data and add the key-value pair to the object
 */

/**
 * 03 easy medium
 * Write a function to remove. 'null', '0', '""', 'false', 
 * 'undefined' and 'NaN' values from an array.
 * Sample array: [NaN, 0, 15, false, -22, '',undefined, 47, null]
 * Expected result: [15, -22, 47]
 * Use arrow function
 */