/**
 * 1. Write a program that takes in two numbers and prints the larger of the two
 * 
 * E.g. Given the numbers 5 and 7, the program should print 7
 */

num1 = 5;
num2 = 7;

if (num1 > num2) {
    console.log(num1)
} else (num1 < num2)
console.log(num2)

/**
 * 2. Write a program that takes in a number and prints whether it is even or odd.
 * 
 * e.g. given the number 3, it should print Odd
 */

let number = 3;
if (number % 2 == 0) {
    console.log('even')
} else {
    console.log('odd')
}

/**
 * 3. Write a program that takes in an array of numbers and prints the sum of all even numbers in the array.
 * 
 * e.g. given the array [1, 2, 3, 4, 5, 6] should print 12
 */


const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sum += numbers[i];
    }
}

console.log(sum);

/**
 * 4. Write a program that takes in a string and prints the number of vowels in the string.
 * 
 * E.g. given the string 'hello', the program should print 2
 */

const vowels = ['a', 'e', 'i', 'o', 'u'];
const word = 'hello';

let vowelsCount = 0;

for (i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
        vowelsCount++;
    }
}

console.log(vowelsCount);

/**
 * 5. Write a program that takes in an array of strings and prints the longest string in the array.
 * 
 * E.g. for given array ['apple', 'banana', 'cherry'] the program should print banana
 */


const strings = ['apple', 'banana', 'cherry'];
let longestString = strings[0];

for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
        longestString = strings[i];
    }
}
console.log(longestString);

/**
 * 6. Write a program that takes in an array of numbers and prints a new array with all numbers multiplied by 2.
 * 
 * e.g. given an array [1, 2, 3] it should print [2, 4, 6]
 */

let oneTwoThree = [1, 2, 3];
let double = [];

for (let i = 0; i < oneTwoThree.length; i++) {
    double.push(oneTwoThree[i] * 2);

}

console.log(double);

/**
 * 7. Write a program that takes in a string and prints a new string with all vowels replaced by the letter 'o'.
 * 
 * e.g. given string 'hello' it should print 'hollo'
 */

let stringHello = 'hello';

let result = '';

let vowelsAll = 'aeiouAEIOU'

for (i = 0; i < stringHello.length; i++) {
    if (vowelsAll.includes(stringHello[i])) {
        result += 'o';
    } else {
        result += stringHello[i];
    }
}

console.log(result);

/**
 * 8. Write a program that takes in a string and prints the number of words in the string. You can assume that words are separated by spaces.
 * 
 * e.g. given string 'Hello world, how are you?' it should print 5
 * 
 */

let sentance = "My name is Anastasija";
let wordsCounted = 1;

for (let i = 0; i < sentance.length; i++) {
    if (sentance[i] === ' ') {
        wordsCounted++;
    }
}

console.log(wordsCounted);



/**
 * 9. Write a program that takes in an array of strings and prints a new array with all strings in uppercase.
 * 
 * e.g. given array ['apple', 'banana', 'cherry'] it should print [ 'APPLE', 'BANANA', 'CHERRY' ]
 */

let fruity = ['apple', 'banana', 'cherry'];
let fruityUpper = [];

for (let i = 0; i < fruity.length; i++) {
    fruityUpper.push(fruity[i].toLocaleUpperCase());

}
console.log(fruityUpper);

/**
 * 10. Write a program that takes in a number and prints a new array with all the numbers from 1 to that number.
 * 
 * e.g. given number 5 it should print [1, 2, 3, 4, 5]
 */

let uniqueNumber = 7;
let newArray = [];

for (let i = 1; i <= uniqueNumber; i++) {
    newArray.push(i);
}

console.log(newArray);