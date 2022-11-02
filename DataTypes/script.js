'use strict';
let message = 'hello';
// message = 123456;
console.log(message);
let n = 123;
n = 12.345;
console.log(n);

let str = 'Hello';
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

console.log(phrase);

let name = 'John';

// embed a variable
alert(`Hello, ${name}!`); // Hello, John!

// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

let isGreater = 4 > 1;

alert(isGreater); // true (the comparison result is "yes")
console.log(isGreater);
