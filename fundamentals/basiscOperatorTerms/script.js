/*
An operand - is what operators are applied to . For instance, in the
multiplcation of 5 * 2 there are two operands: the left operand is 5 and
the right operand is 2. Sometimes, people call these "argument" instead of "operands";

An operator is unary if it has a single operand.
*/

let x = 1;
console.log(x); // it 1
x = -x;
console.log(x); // -1 unary negation was applied

// An operator is binary if it has two operands.
let m = 1,  n = 3;
console.log(m, n); // " , binary minus subtracts values"
console.log("Glow" > "glee");

/*
Comparison of different types
When comparing values of different types, JavaScript converts the values to numbers.
*/
console.log('3' > 1 ); // True, string "3" becomes a number 3
console.log('0' == 1); // true, string "01" becomes a number 1


console.log(true == 1); //  true
console.log(false == 0); // true

/*
String Comparison
to see whether a string is greater thann another, JavaScript uses the so-called
"dictionary" or "lexicographical" order.
In other words, string are compared letter-by-letter.
*/

console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log("Bee" > "Be"); // true
console.log("2" > 1);// true string "2" becomes a number
console.log(undefined > 0); // false
console.log(undefined == 0);// false

console.log(NaN > 0); // false
console.log(NaN == 0); //fasle
