/**
 * in contrast objects are used to strore collections of data in more
 * complex entities.
 * That object in their simplest form are used to group variables
 */



// const name = "Abdulhadi";
// const age = 28;

// Objects
const Person = {
    name: "Abdulhadi", // properties or variables in here it also called Keys
    age: 28 // we keys as age and value 28
}
console.log(Person);
// Object Dot notation to get the values of ......
console.log(Person.name);
console.log(Person.age);
console.log(typeof Person);// that will give to us an object
console.log(typeof Person.name); /*
 it give us string coz is a primitive data type of a sting
 that mean that the person or an object can contain any data types inside of it it
 can contain strings and it can also contain numbers there are many
 other kinds of object in javascript we have arrays to store ordered data collections

 */
// This is also an object
const date = new Date();
console.log(date);


 // Array
 // Array to store ordered dta collections
 /*
 * Son in an array we can store multiple primitve types
 */

 const arr = [1, "it' just for text", 3, 4, 5, 6, 7]; // we just have index
 console.log(arr);
 console.log(typeof arr); // Object
 console.log(typeof arr[0]); //number
 console.log(typeof arr[1]); //string
