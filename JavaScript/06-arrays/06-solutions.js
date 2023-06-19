// 01
const myLuckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumNumbers() {
  let sum = 0;

  for (let i = 0; i < myLuckyNumbers.length; i++) {
    sum += myLuckyNumbers[i];
  }

  return sum;
}

// 02
function toArray(a, b) {
  return [a, b];
}

// 03
function getFirstElement(array) {
  return array[0];
}

// 04
function setFirstElement(array, element) {
  return (array[0] = element);
}

// 05
function getLastElement(anArray) {
  let lastIndex = anArray.length - 1;
  return anArray[lastIndex];
}

// 06
function push(array, element) {
  array.push(element);
  return array;
}

// 07
function add(array, element) {
  if (array.indexOf(element) > -1) array.push(element);

  return array;
}

// 08
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

// 09
function slice(array, number) {
  return array.slice(0, number);
}

// 10
function addDash(string) {

  const result = [str[0]];

  for (let x = 1; x < string.length; x++) {
    if (string[x - 1] % 2 === 0 && str[x] % 2 === 0) {
      result.push("-", string[x]);
    } else {
      result.push(string[x]);
    }
  }

  return result.join('')
}

// 11
function cleanArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === 'a') array.splice(i, 1)
  }

  return array
}

console.log(cleanArray(['apple', 'banana', 'orange']))