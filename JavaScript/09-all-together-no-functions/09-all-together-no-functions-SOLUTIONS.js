// 1.

let num1 = 5;
let num2 = 7;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}
//*********************************

// 2.

let num = 3;

if (num % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}
//*********************************

// 3.

let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum += arr[i];
  }
}

console.log(sum);

//*********************************

// 4.

let str = 'hello';
let count = 0;
let vowels = 'aeiouAEIOU';

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}

console.log(count);

//*********************************

// 5.
let arr5 = ['apple', 'banana', 'cherry'];
let longest = '';

for (let i = 0; i < arr5.length; i++) {
  if (arr5[i].length > longest.length) {
    longest = arr5[i];
  }
}

console.log(longest);

//*********************************

// 6.

let arr6 = [1, 2, 3];
let doubledArr = [];

for (let i = 0; i < arr6.length; i++) {
  doubledArr.push(arr6[i] * 2);
}

console.log(doubledArr);

//*********************************

// 7.

let str7 = 'hello';
let vowels7 = 'aeiouAEIOU';
let newStr = '';

for (let i = 0; i < str7.length; i++) {
  if (vowels7.includes(str7[i])) {
    newStr += 'o';
  } else {
    newStr += str7[i];
  }
}

console.log(newStr);


//*********************************

// 8.

//*********************************

let str8 = 'Hello world, how are you?';
let wordCount = 1;

for (let i = 0; i < str8.length; i++) {
  if (str8[i] === ' ') {
    wordCount++;
  }
}

console.log(wordCount);


// 9.

let arr9 = ['apple', 'banana', 'cherry'];
let upperArr = [];

for (let i = 0; i < arr9.length; i++) {
  upperArr.push(arr9[i].toUpperCase());
}

console.log(upperArr);


//*********************************

// 10.

let num10 = 5;
let arr10 = [];

for (let i = 1; i <= num10; i++) {
  arr10.push(i);
}

console.log(arr10);
