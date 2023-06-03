/**
 * Exercise 01
 * Name: String length
 * Write a program that has a string and prints the number of characters in it
 */

const stringLenght = 'anastasija'
console.log(stringLenght.length);

/**
 * Exercise 02
 * Write a program that has a string and prints it in lowercase and uppercase 
 * with "-"" as delimiter.
 * Example: 'Mthatha' should print 'mthatha-MTHATHA'.
 */

const lowerUpper = 'Mthatha';
console.log(lowerUpper.toLowerCase() + '-' + lowerUpper.toLocaleUpperCase());

/**
 * Exercise 03
 * Write a program that has two strings and prints the initial letters of theses strings.
 * Example: 'Amnesty', 'International' should print 'AI'
 */

const initialLettersOne = 'Anastasija';
const initialLettersTwo = 'Pankova';
console.log(initialLettersOne[0] + initialLettersTwo[0]);

/**
 * Exercise 04
 * Write a program that has a string and prints the first character of the string that is not a space 
 * Example: ' Rosa Parks ' should print 'R'.
 */

const noSpaceFirstLetter = ' Anastasija';
let trimmedText = noSpaceFirstLetter.trim();

console.log(trimmedText[0]);

/**
 * Exercise 05
 * Write a program that has two strings and prints the 
 * first occurrence of the second string in the first string. 
 * Ignore the case sensitivity.
 * Example: Two strings: 'bit','it' should print 1
 */

const string01 = 'parizhanka', string02 = 'rizhanka';

let string01Lower = string01.toLowerCase();
let string02Lower = string02.toLowerCase();

console.log(string01Lower.indexOf(string02Lower));

/**
 * Exercise 06
 * Write a program that has a string and prints the first word in that string. 
 * The first word are all characters up to the first space.
 * Example: String: 'see and stop' should print 'see'
 */

const firstWord = 'Anastasija Pankova';

let emptySpace = firstWord.indexOf(' ');

console.log(firstWord.substring(0, emptySpace));

/**
 * Exercise 07
 * Write a program that replaces '-' with '/' in a date string.
 * Example: Given string '20-05-2017' should return '20/05/2017'
 */

const date = '26-Nov-1995';

console.log(date.replaceAll('-', '/'));


/**
 * Exercise 08
 * Write a program to split a given string and convert it into an array of words
 */

const stringToArray = "Anastasija Pankova";

console.log(stringToArray.split(' '));


/**
 * Exercise 09
 * What would following code return?
 * console.log(typeof typeof 1);
 * Explain your answer
 */


Answer: String


/**
 * Exercise 10
 * Write a program that has string that contains a filename
 * and prints the extension of that filename
 * Example: 'file.txt' should print 'txt'
 */

const fileName = 'file.txt';
console.log(fileName.substring(fileName.lastIndexOf('.') + 1));