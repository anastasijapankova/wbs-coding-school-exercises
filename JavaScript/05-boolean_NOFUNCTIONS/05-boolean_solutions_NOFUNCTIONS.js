// 01
console.log('-----------01----------');

const n1 = 40, n2 = 41;

console.log((n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||

  (n1 >= 70 && n2 <= 100 && n1 >= 70 && n2 <= 100) ?
  'Both are in same the range' : 'They are not both in the same range');

// 02
console.log('-----------02----------');

const n21 = 10;

console.log('their difference is:', n21 <= 19 ? 19 - n21 : (n21 - 19) * 3);


// 03
console.log('-----------03----------');

const n31 = 50, n32 = 51;

console.log(n31 == 50 || n32 == 50 || n31 + n32 == 50 ?
  'One of numbers is 50 or their sum is 50' :
  'None of the numbers is 50 and their sum is not 50');

// 04
console.log('-----------04----------');

const n41 = 20, n42 = -10;

console.log('Both numbers have the same sign:', (n41 < 0 && n42 > 0) || (n41 > 0 && n42 < 0) ? 'No' : 'Yes');

// 05
console.log('-----------05----------');

const string5 = "Console";

console.log(string5 === null || string5 === undefined || string5.substring(0, 2) === "Py" ?
  string5 : "Py" + string5
);

// 06
console.log('-----------06----------');

const string6 = 'Console';

console.log(string6.length > 3 ?
  string6.slice(-3) + string6 + string6.slice(-3)
  :
  'String is not big enough'
);

// 07
console.log('-----------07----------');

const n71 = 40, n72 = 20, n73 = 30;

let max = - Infinity;

n71 > n72 ? max = n71 : max = n72;

n73 > max ? max = n73 : max;

console.log('The max is', max);


// 08
console.log('-----------08----------');

const n81 = 90, n82 = 20;

const diff1 = Math.abs(n81 - 100);
const diff2 = Math.abs(n82 - 100);

console.log('The nearest to 100 is', diff1 < diff2 ? n81 : n82);



// 9
console.log('-----------09----------');

const n91 = 51, n92 = 41, n93 = 61;

console.log('Last digits are the same:',
  n91 % 10 == n92 % 10 && n92 % 10 == n93 % 10 && n91 % 10 == n93 % 10 ?
    'Yes' : 'No'
);