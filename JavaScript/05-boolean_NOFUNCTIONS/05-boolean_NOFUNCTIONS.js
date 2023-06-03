/**
 *  01
 *  Write a program that has 2 numbers and checks whether both numbers are 
 *  in the range 40..60 or in the range 70..100 inclusive and prints the result.
 */

const number1 = 45;
const number2 = 54;

console.log((number1 >= 40 && number1 >= 60 && number2 >= 40 && number2 <= 60) ||
    (number1 >= 70 && number1 >= 100 && number2 >= 70 && number2 <= 100) ?
    'Both are in same the range' : 'They are not both in the same range');

/**
 * 02
 * Write a program that computes the difference between a specified number and 19. 
 * It should print their difference if the number is less than 19  
 * and triple their absolute difference if the specified number is greater than 19
 * 
 * e.g. if the number is 20, then it should print 3 and if it is 10, it should print 9.
 */

const specNumber = 13;

console.log('the difference is:', specNumber <= 19 ? 19 - specNumber : (specNumber - 19) * 3);

/**
 * 03
 * Write a program to check two given numbers 
 * and print true if one of the numbers is 50 or if their sum is 50
 */

const n1 = 26, n2 = 11;

console.log(n1 === 50 || n2 === 50 || n1 + n2 === 50 ? 'One of the numbers is 50 or their sum is 50' : 'None of the numbers is 50 or their sum is not 50');

/**
 * 04
 * Write a program to check two given integers
 * and print 'Yes' if one is positive and another one is negative
 * or 'No' if both are positive/negative
 */

const numOne = 26, numTwo = -11;

console.log('One number is positiove, another is negative:', (numOne < 0 && numTwo > 0) || (numOne > 0 && numTwo < 0) ? 'Yes' : 'No');

/**
 * 05
 * Write a program that prints a given string. 
 * If the given string begins with "Py" then print the original string.
 * Else print the string adding "Py" in front of it. 
 */

const pyString = 'ton';

console.log(pyString === null || pyString === undefined || pyString.substring(0, 2) === 'Py' ? pyString : 'Py' + pyString);

/**
 * 06
 * Write a program to create a new string from a given string taking the last 3 characters 
 * and added at both the front and back. 
 * The string length must be 3 or more
 */

const threeString = 'berlin';

console.log(threeString.length > 3 ? threeString.slice(-3) + threeString + threeString.slice(-3) : "The initial string is less than 3 characters");

/**
 * 07
 * Write a program that has 3 numbers and prints the biggest of them
 * without using Math.max()
 */

const nr1 = 2, nr2 = 4, nr3 = 6;

let max = 0;

nr1 > nr2 ? max = nr1 : max = nr2;
nr3 > max ? max = nr3 : max;

console.log('The max is ', max);


/**
 * 08
 * Write a program that finds the number which is nearest to 100 
 * from two different given integer values
 */

const no1 = 20, no2 = 80;

console.log('This number is closer to 100: ', (100 - n1) > (100 - n2) ? no1 : no2);

/**
 * 9 - could be challenging
 * Write a program that checks whether the last digit of three given positive integers 
 * is the same
 */

const nOne = 33, nTwo = 53, nThree = 23;


console.log('Last digits are the same: ',
    nOne % 10 === nTwo % 10 && nTwo % 10 === nThree % 10 && nThree % 10 === nOne % 10 ? 'They are the same' : 'They are NOT the same');
