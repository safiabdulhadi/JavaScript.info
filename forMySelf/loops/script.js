// let fruits = ['apple','banana', 'mango','orange'];
// console.log(fruits);

// for(fruit in fruits){
//     console.log(fruit);
// }
// index 0 1 2 3
// for(fruit of fruits){
//     console.log(fruit);
// }
//  output apple banana mango orange

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
//     //  output apple banana mango orange
// }
// for(let i = 0; i < fruits.length; i++){
//     console.log(i);
//     //  output 0 1 2 3
// }

// const person = {
//     name: 'John',
//     age: 30
// }
// // console.log(person);
// // console.log(person.name);
// // console.log(person["name"]);
// for(personObjValues in person){
//     console.log(personObjValues);
//     // console.log(person[personObjValues]);
// };

// let colors = ['red', 'green', 'blue'];s
// console.log(colors);
// for(key in colors) {
//     // console.log(key);
//     console.log(key , colors[key]);
// }

// for(color of colors){
//     console.log(color);
// }

// let i = 0;
// while(i < 10){
//     // if(i == 5){
//     //     break;
//     // }
//     if(i % 2 == 0){
//         continue;
//         i++;
//     }
//     console.log(i)
// }



// function  twoNumbers(a,b){
//     let sum = a + b;
//     return sum;
// }
// const total = twoNumbers(1,2);

// console.log(total);


// function max(a,b){
// //     if(a > b)return a;
// //     return b;
//   return (a > b) ? a : b;
// }

// const sum = max(3,3);
// console.log(sum);


// function isLandscape(width, height) {
//     // return (width > height) ? true : false;
//     // return (width > height);
//     return width > height;
// }

// const total = isLandscape(300, 200);
// console.log(total);


function fizzBuzz(input){
if(typeof input !== 'Number')
return 'Not a number';
if((input % 3 === 0) && (input % 5 ===0))

if(input % 3 === 0)
return 'Fizz';
if(input % 5 === 0)
return 'Buzz';
return 'FizzzBuzz';

return input;
}

const output = fizzBuzz(15);
console.log(output);

