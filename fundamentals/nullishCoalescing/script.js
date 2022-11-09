/*
Nullish coalescing operator '??'

?? returns the fist argument if it's not null// undefined. Otherwise, the second one.




result = a ?? b ;
result = (a !== null && a !== undefined) ? a : b;

*/
let a = "hi";
let b = "salam";
let result = a ?? b;

console.log(`Result is : ${result}`); // Result is : hi


let ab = null;
let bc = "salam";
let result1 = (ab != null && ab != undefined) ? ab : bc;

console.log(`Result is : ${result1}`); // it salam

let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercode



