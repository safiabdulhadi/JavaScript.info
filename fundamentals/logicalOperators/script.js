/*
4 logical operators : || (or) , && (AND), ! (NOT), ?? (Nullish Coalescing).
|| (OR) : finds the first truthy value

if any of its arguments are true, it returns true, otherwise it returns false.
*/
console.log(true || true); // ture
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

/*
&&(AND): finds the first falsy value
AND returns true if both operands are truthy and false otherwise
*/

console.log(true && true); //true
console.log(true && false); //false
console.log(true && false); //false
console.log(false && false); // false

