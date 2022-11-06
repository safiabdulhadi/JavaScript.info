// 'use strict';
// let message = 'hello';
// // message = 123456;
// console.log(message);
// let n = 123;
// n = 12.345;
// console.log(n);

// let str = 'Hello';
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;

// console.log(phrase);

// let name = 'John';

// // embed a variable
// alert(`Hello, ${name}!`); // Hello,John!

// // embed an expression
// alert(`the result is ${1 + 2}`); // the result is 3

// let isGreater = 4 > 1;

// alert(isGreater); // true (the comparison result is "yes")
// console.log(isGreater); // result is true

// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;
// console.log(str);
// console.log(str2);
// console.log(phrase);


/*
The typeof operator return the type of the argument.it's useful when we want to proces values
of different types differently or just want to do a quick check.
*/


console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol ("id")); // "symbol"
console.log(typeof Math); // "object"
/**
 The result of typeof null is "object" . That's and officiallly recongized derror in typeof,
 coming from very early days of JavaScript and kept for comatibility.
 Definitely, null is not an object. It is a specail value with a separate type of it's own.
 The behavior of typeof is wrong here.
 */

 console.log(typeof null); // "object"
 console.log(typeof alert); // "function"
