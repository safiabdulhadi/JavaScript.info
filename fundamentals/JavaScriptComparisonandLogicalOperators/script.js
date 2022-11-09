const isCool = true;
console.log(isCool); // true

const age = null;
console.log(age);
/* null is just a special value which represents
nothing empty or simply value unknown the age = is unknown or empty for some reason*/
console.log(typeof age); // object
/**
 * let's talk about the value of undefined
 * A variable that has not been assigned a value is undefined
 * So the meaning of undefined is value is not assigned if a variable
 * is declared but not assigned then it's vale is undefined by default
 */
/**
 *what is the difference between undefined and null ?
undefined means a variable has been declared but has not been assigned
value as you can see on buttom for x .
null is an asignment value it can be assigned to a variable representation
of no value as you can on above example const age = null

 */
let x;
console.log(x); // undefined
console.log(typeof x); // undefined


/*
Comparison Operators compare two values and return boolean values
true or false
*/
// Comparison Operator => true /false

const a = 5;
const b = 10;

console.log(a < b); // true

console.log(a > b); // false

console.log(a <= b); // true

console.log(a >= b); // false

console.log(a == b); // true


