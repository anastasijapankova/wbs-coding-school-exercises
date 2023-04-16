// 00-import-export (01)
import { greet } from "./myModule";

const name = 'Anastasija';

console.log(greet(name));

// 00-import-export (02)
import { add } from "./math";

const a = 3;
const b = 2;

console.log(add(a, b))
console.log(substract(a, b))

// 00-import-export (03)
import { getName } from "./utils";
import { getAge } from "./utils";

const user = { name: 'Anastasija', age: 27 };

console.log(getName(user));
console.log(getAge(user));

// 00-import-export (04)
import config from "./config";

console.log(config.port);
console.log(config.database);
console.log(config.apiKey);

// 00-import-export (05)
import Person from "./myModule";

const person1 = new Person('Anastasija', 27);
const person2 = new Person('Jelizaveta', 11);

console.log(Person(person1.name, person1.age));
console.log(person2.name, person2.age);

// 00-import-export (06)
import someFunction from './myModule'

const name1 = 'Anastasija'

console.log(someFunction(name1))

// 00-import-export (07)
import cats from "./utils";

const numbers = [1, 2, 3, 4, 5];

console.log(cats(numbers));
