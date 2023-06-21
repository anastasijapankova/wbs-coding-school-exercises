// 01
function diffArray(array1, array2) {
    const result = []

    array1.forEach(item => {
        if (!array2.includes(item)) result.push(item)
    })

    return result
}

// 02
function checkUppercase(letter) {
    return letter.toUppercase() === letter
}

// 03
function countOdd(number) {
    let counter = 0;

    for (let i = 0; i < String(number.length); i++) {
        if (number % 2 !== 0) counter++
    }

    return counter
}

// 04
function calcPrice(number, duration) {

    let minutes = (duration / 60).toFixed(2)

    if (number.substr(0,6) === '0180-1') {
        return (minutes * 0.039).toFixed(2)
    } else if(number.substr(0,6) === '0180-2') {
        return (minutes * 0.42 + 0.06).toFixed(2)
    } else if(number.substr(0,6) === '0180-7') {

        if (duration <= 30) return 0

        minutes -= 0.5

        return (minutes * 0.44).toFixed(2)

    }else if(number.substr(0,6) === '0800') {
        return 0
    }
}

console.log(calcPrice('0180-7123', 30))
console.log(calcPrice('0180-7123', 31))

// 05 with filter method should be an easier solution
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