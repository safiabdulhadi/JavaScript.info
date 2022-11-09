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


/**
 * whe it comes to data types there are
 * two types of programming laanguages statically typed
 * or dynamically typed
 * languages and dynamically typed languages what does this mean statically
 * typed languages are languages where each varable and expression type
 * is already known at complie time so once avarable
 * is declared to be of a certain type it cannot hold values of any other data
 * type that's the case in c c plus or java...
 * for example in c if you decleare a vaariable to be a number you
 * have to say int which stand for integer so end number
 * is going to be 5. int = 5;
 * you cannot do number is going to be like a sting of
 * test now this is an eeror if you declare a variable as number it must
 * stay a number on the other hand
 * we have dynamically typed languages they can receive different data types over time
 * javascript is dynamically typed that means that varables in javascript
 * can receive different data types over time we are going to see this in action really soon
 * a variable in javascript can contain any data a variable ca at one moment be a sting
 * and add another one be a number

 */
// Statically typedn// it can not change
let message = "Hello, world!";
console.log(message);
console.log(typeof message); // "Hello, world!"
message = 25;
console.log(message);
console.log(typeof message); // number
// Dynamically typed // it can change like above javascript
//javascript is dynamically typed which means that at one moment the variable can be a number or string
