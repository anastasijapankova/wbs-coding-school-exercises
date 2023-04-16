// 00-import-export (01)
export function greet(name) {
    return `Hello, ${name}!`;
}

// 00-import-export (05)
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// 00-import-export (06)
export default function (name1) {
    return `Hello + ${name1}`;

}


