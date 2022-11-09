// function calculateArea(width, height){
//     return width * height;
// }
// allArea = calculateArea(20 , 10);
// console.log(allArea);

function addValues(num1, num2){
return num1 + num2;
}
let numOneBe = 200;
let numTwoBeStr = 300;
let resultOfNumbersBe = addValues(numOneBe, numTwoBeStr);

console.log(resultOfNumbersBe);//output 500

let resultOfNumbersBe1 = addValues(30, 200);
console.log(resultOfNumbersBe1);//230
//object
let obj={
    numObj1: 150,
    numObj2: 300
};
let result = addValues(obj.numObj1,obj.numObj2 );
console.log(result);// 450

// array
let numArrayBe = [ 400, 300];
let resultOfArrayNumbBe = addValues(numArrayBe[0],numArrayBe[1]);
console.log(resultOfArrayNumbBe);//700
