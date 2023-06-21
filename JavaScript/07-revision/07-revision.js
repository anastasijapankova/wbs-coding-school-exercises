/**
 * 01
 * Create a function that accepts 2 arrays and returns an array with
 * the different items between those 2 arrays
 * example
 * diffArray(["grass", "dirt", "pink wool", "dead shrub"],  ["grass", "dirt", "dead shrub"]) should return ["pink wool"]
 *
 * diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4]
 */

function differanceArrays(array1, array2) {

    const result = []

    for (let item of array1) {
        if (!array2.includes(item)) {
            result.push(item)
        }
    }

    for (let item of array2) {
        if (!array1.includes(item)) {
            result.push(item)
        }
    }

    return result
}
const array1 = [1, 2, 3]
const array2 = [1, 2, 4]
console.log(differanceArrays(array1, array2))


/**
 * 02
 * Write a function that accepts a letter and returns wether this letter
 * is upperCase or not. if It's uppercase should return 'YES'
 * else should return 'NO'
 */

function isUpperCase(letter) {
    if (letter === letter.toUpperCase()) {
        return "Yes"
    } else {
        return "No"
    }
}

console.log(isUpperCase("r"))

/**
 * 03
 * Write a function that counts the number of the odd digits in number.
 *
 */

function countOddDigits(number) {
    let count = 0;
    const digits = number.toString();

    for (let i = 0; i < digits.length; i++) {
        const digit = parseInt(digits[i]);

        if (digit % 2 !== 0) {
            count++;
        }
    }

    return count;
}

console.log(countOddDigits(1234567));
console.log(countOddDigits(2468));


/**
 * 04
 * Telephone conversation price calculator
 * Write a program that calculates the price in euros of a
 * telephone conversation.
 * The Price table is:
 * numbers starting from: 0180-1 = 0.039 €/minute
 * numbers starting from: 0180-2 = 0.06 €/call plus 0.42 €/minute
 * numbers starting from: 0180-7 = first 30 seconds free, then 0.14 €/minute
 * numbers starting from 0800 = free of charge.
 * Please note that prices must be format with 2 digits precision
 */

function calcPrice(number, duration) {

    let minutes = (duration / 60).toFixed(2)

    if (number.substr(0, 6) === '0180-1') {
        return (minutes * 0.039).toFixed(2)
    } else if (number.substr(0, 6) === '0180-2') {
        return (minutes * 0.42 + 0.06).toFixed(2)
    } else if (number.substr(0, 6) === '0180-7') {

        if (duration <= 30) return 0

        minutes -= 0.5

        return (minutes * 0.14).toFixed(2)

    } else if (number.substr(0, 6) === '0800') {
        return 0
    }
}

console.log(calcPrice('0180-7123', 30))
console.log(calcPrice('0180-7123', 31))


/**
 * 05
 * Write a function that accepts an array with items followed by one or more
 * arguments. The function should return another array that doesn't include
 * any of the elements that have the same values as in the arguments that 
 * come after the array
 * Examples: 
 * clearArray([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
 * clearArray([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]
 * clearArray([3, 5, 1, 2, 2], 2, 3, 5) should return [1]
 * clearArray([2, 3, 2, 3], 2, 3) should return []
 */

function clearArray(array, ...values) {

    values.forEach(item => {

        let idx = array.indexOf(item)

        while (idx > -1) {

            array.splice(idx, 1)
            idx = array.indexOf(item)

        }

    })
    return array
}

console.log(clearArray([1, 2, 3, 1, 2, 3], 2, 3)) // should return [1, 1]
console.log(clearArray([1, 2, 3, 5, 1, 2, 3], 2, 3)) // should return [1, 5, 1]
console.log(clearArray([3, 5, 1, 2, 2], 2, 3, 5)) // should return [1]
console.log(clearArray([2, 3, 2, 3], 2, 3)) // should return []