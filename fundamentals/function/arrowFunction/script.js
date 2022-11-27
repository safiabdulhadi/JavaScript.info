// arrow functions

// const singHappyBirthday = () => {
//     return 'happy-birthday';
// }
// happyBirth = singHappyBirthday();
// console.log(happyBirth);

// const isEvent = (number) => {
// return number % 2 === 0;
// }
// console.log(isEvent(2)); // true
// console.log(isEvent(3)); // falses

function sum1(n1, n2){
return n1 + n2;
}

const r1 = sum1(39, 35);
console.log(r1);

//2 // function experssion
const sum2 = function(n1, n2){
    return n1 + n2;

}

const r2 = sum2(30, 20);
console.log(r2);

//3
const sum3 = (n1, n2)=>{
    return n1 + n2;
}

const r3 = sum3(10, 20);
console.log(r3);

//4
const sum4 = (n1, n2)=> n1 = n2;

const r4 = sum4(20, 20);
console.log(r4);

let foo = text => console.log(`Let say ${text} and how are you? `);
foo("Hello");
let foo1 = text => console.log("let say this" + '' + text);
foo1(" this text");

let bar = () => console.log('this without arguments');
bar();

let sum = (a, b) => a + b;
console.log(sum);

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

let seeLength = materials.map(material => material.length);
console.log(seeLength);
