// 01

// myModule.js file:

function greet(name) {
  return `Hello, ${name}!`;
}

export { greet };

//   main.js file:

import { greet } from './myModule.js';

const name = 'John';

console.log(greet(name)); // Output: Hello, John!

// 02

// math.js file:

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export { add, subtract };

// main.js file:

import { add, subtract } from './math.js';

const a = 5;
const b = 3;

console.log(add(a, b)); // Output: 8
console.log(subtract(a, b)); // Output: 2

// 03

// utils.js file:

function getName(user) {
  return user.name;
}

function getAge(user) {
  return user.age;
}

export { getName, getAge };

// main.js file:
import { getName, getAge } from './utils.js';

const user = { name: 'John', age: 30 };

console.log(getName(user)); // Output: John
console.log(getAge(user)); // Output: 30

// 04

// config.js file:

const config = {
  port: 3000,
  database: 'mongodb://localhost/myapp',
  apiKey: '1234567890'
};

export default config;

// main.js file:
import config from './config.js';

console.log(config.port); // Output: 3000
console.log(config.database); // Output: mongodb://localhost/myapp
console.log(config.apiKey); // Output: 1234567890

// 05

// myModule.js file:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export default Person;

// main.js file:

import Person from './myModule.js';

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

console.log(person1.name, person1.age); // Output: John 30
console.log(person2.name, person2.age); // Output: Jane 25

// 06

// myModule.js file:
export default function (name) {
  return `Hello, ${name}!`;
}

// main.js file:

import greet from './myModule.js';

const name06 = 'John';

console.log(greet(name06)); // Output: Hello, John!

// 07

// utils.js file:

export default function (numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// main.js file:

import sum from './utils.js';

const numbers = [1, 2, 3, 4, 5];

console.log(sum(numbers)); // Output: 15
