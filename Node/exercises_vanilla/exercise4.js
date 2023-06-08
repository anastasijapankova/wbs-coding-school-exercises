// Exercise 4 (Help - fs https://nodejs.org/api/fs.html)

// Re-written exercise2.js in ES6

import fs from 'fs';

const content = 'hello';

fs.writeFile('test.html', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File created successfully!');
});

// New code exercise2.js in ES5

var fs = require('fs');

var content = 'hello';

fs.writeFile('test.html', content, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File created successfully!');
});

// ****************************************************


// Re-written exercise3.js in ES6

import fs from 'fs';

fs.readFile('test.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


// New code exercise3.js in ES5

var fs = require('fs');

fs.readFile('test.html', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// ****************************************************

// In ES5, the require statement is used to import the fs module, and the callback 
// functions are written using the function keyword instead of arrow functions.






