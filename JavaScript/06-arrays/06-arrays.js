/**
 * 01 easy
 * Crate an array named myLuckyNumbers with the following numbers: 1,2,3,4,5,6,7,8,9,10
 * Create a function that sums all the numbers of the array
 */

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myLuckyNumbers() {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        sum += numbers[i]
    }
    console.log('total = ', sum)
}

myLuckyNumbers()

/**
 * 02 easy
 * Write a function toArray that takes 2 values and returns these values in an array.
 * Example: toArray(5, 9) should return the array [5, 9]
 */

function toArray(num1, num2) {
    const array = [];

    array.push(num1, num2)

    return array;
}

console.log(toArray(5, 9))

/**
 * 03 easy
 * Write a function getFirstElement that takes an array and returns the first element of the array.
 * Example: getFirstElement([1, 2]) should return 1
 */

function getFirstElement(ourNumbers) {

    return ourNumbers[0];
}

console.log(getFirstElement([1, 2]))

/**
 * 04 easy
 * Write a function setFirstElement that takes an array and one variable. 
 * Set the first element of the array with the new variable 
 * The array should be returned
 */

function setFirstElement(array, variable) {
    return (array[0] = variable);
}

console.log(setFirstElement(2, 7));

/**
 * 05 easy
 * Write a function getLastElement that takes an array and 
 * returns the last element of the array
 */

function getLastElement(anArray) {

    let lastIndex = anArray.length - 1;
    return anArray[lastIndex];

}

let myArray = [1, 2, 3, 4, 5]
let lastElement = getLastElement(myArray);
console.log(lastElement);


/**
 * 06 easy
 * Write a function that accepts an array and a variable. The function should
 * add the variable to the end of the array
 * The function should return the array
 */


function push(array, element) {
    array.push(element);
    return array;

}

let arrayOne = [1, 2, 3, 4, 5];
let arrayNew = push(arrayOne, 6);
console.log(arrayNew);

/**
 * 07 easy - medium
 * Write a function add that adds an element to the end of an array. 
 * However, the element should only be added if it is not already in the array.
 * Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2]
 */

function add(list, number) {
    if (list.indexOf(number) > -1) {
        console.log(list);
    } else {
        list.push(number);
        console.log(list);
    }

}

let myList = [1, 2, 3, 4, 5, 6, 7];
add(myList, 3)
add(myList, 8)

/**
 * 08 medium
 * Write a function named list that takes an array of words and returns a string 
 * by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 * An empty array should return an empty string.
 * Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'
 */

function list(words) {
    if (words.length === 0) {
        return "";
    }

    if (words.length === 1) {
        return words[0];
    }

    let wordsExLast = words.slice(0, words.length - 1);
    let lastWord = words[words.length - 1];
    return wordsExLast.join(", ") + " and " + lastWord;
}

console.log(list(['Huey', 'Dewey', 'Louie']))

/**
 * 09 easy
 * Write a function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array
 * The function should accept the array and the number of elements
 */

const array = ['jan', 'feb', 'mar', 'apr', 'may']
function slice(array, number) {
    return array.slice(0, number);
}
console.log(slice(['jan', 'feb', 'mar', 'apr', 'may'], 2))

/**
 * 10 medium
 * Write a function which accepts a string of digits as input and inserts dashes (-) 
 * between each two even numbers. 
 * For example if you accept 025468 the output should be 0-254-6-8
 * The function should return the string output
 */

function addDash(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result += string[i];
        if (i < string.length - 1 && parseInt(string[i]) % 2 === 0 && parseInt(string[i + 1]) % 2 === 0) {
            result += "-";
        }
    }
    return result;
}

// Example usage:
const input = "26423608";
const output = addDash(input);
console.log(output);


/**
 * 11 medium 
 * Write a function that accepts an array and  strips from it all items that begin from 'a'
 * E.g. the array ['apple','banana','orange'] should become ['banana','orange']
 */

function fruits(array) {

    for (let i = 0; i < fruits.length; i++) {
        if (array[i][0] === 'a') {
            array.splice(i, 1)
        }
        return array
    }
}

console.log(fruits(['apple', 'banana', 'orange']))