/**
 * Strict equality
 A strict equality operator === checks the equality without type conversion.
  === check value & types

  == only check value
 */

 console.log(0 == false); // true
 console.log(0 === false); // false
//           0 here a number and false is a boolean

console.log('5' == 5); // true first convert to datatypes to number
console.log("5" === 5); //false because they are not same datatype it check type

//  The value undefined shouldn't be compared to other values:

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

console.log(NaN > 0); // false
console.log(NaN < 0); // false
console.log(NaN ==0); //false