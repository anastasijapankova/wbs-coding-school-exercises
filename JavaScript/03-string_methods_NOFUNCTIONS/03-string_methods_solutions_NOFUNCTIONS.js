console.clear()
// 01
console.log('-----------01----------');
const string1 = "lengthystring"

console.log(string1.length)

// 02
console.log('-----------02----------');
const string2 = "Mthatha"

console.log(string2.toLowerCase() + '-' + string2.toUpperCase())

// 03
console.log('-----------03----------');
const string31 = 'Amnesty', string32 = 'International';
console.log(string31[0] + string32[0]);

// 04
console.log('-----------04----------');
const string4 = ' Rosa Parks ';

let trimmedText = string4.trim();

console.log(trimmedText[0]);

// 05
console.log('-----------05----------');

const string51 = 'bit', string52 = 'it';

let string51Lower = string51.toLowerCase();
let string52Lower = string52.toLowerCase();

console.log(string51Lower.indexOf(string52Lower));

// 06
console.log('-----------06----------');

const string6 = 'see and stop';

let firstBlank = string6.indexOf(' ');

console.log(string6.substring(0, firstBlank));

// 07
console.log('-----------07----------');

const string7 = '20-05-2017';

console.log(string7.replace('-', '/'));


// 08
console.log('-----------08----------');

const string8 = 'alice in the wonderland'

console.log(string8.split(' '));

// 09
// the answer is string
// typeof 1 will return "number" and typeof "number" will return string.

// 10
console.log('-----------10----------');

const filename = 'my-file.jpg';
console.log(filename.substring(filename.lastIndexOf('.') + 1));