
/*
Function Declaration

To create a function we can use a function declaration
*/

// function showMessage(){
//     console.log("Hello everyone!");
// }
// showMessage();


// function showMessage(from, text){
//     console.log( `${from} ${text}`);
// }
// showMessage("Hello ", "from me Safi");

// function showMessage(from, text){
//     if(text == undefined){
//         text = ' this text for example';
//     }
//     console.log( `${from} ${text}`);
// }
// showMessage("it' me");


// function showMessage(text){
//     if(text == undefined){
//         text = ' this text for example';
//     }
    // console.log(`${text}`);
//     return text;
// }
// const result = showMessage();
// console.log(result); // the result is : this text for example


// function showCount(count){
// console.log(count ?? "unknown");
// }
// showCount(0);
// showCount(undefined);
// showCount(null);


// function singHappyBirthday(){
//     console.log("Happy Birthday!");
// }
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();


// function twoPlusFour(){
//     return 2 + 4;

// }

// const returnedValue = twoPlusFour();
// console.log(returnedValue);


//funcdtion
// input : string
// output : firstCharacter

// function firstChar(anyString){
//     return anyString[1];
// }

// charString = firstChar('abc');
// console.log(charString);



// function
// input : array , target (number)
// output : index of target if target presnt in array

// [1,2,4,6,39,4] , 6

// function findTarget(array, target){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// const myArray = [1,2,4,6,39,4];

// const result = findTarget(myArray,4 ); // 2 if is not return -1

// console.log(result);




/*
What are functions and why should we use them a javascript function is a block of code

it designed to perform a particular task remember that a block of code

and it performs a task that's it that's javascript function
*/
// A function declaration (defining a function)
// a function call (Calling/ executing a function)


// function square(number){
// return number * number;
// }

// let resultOfSquare = square(4);
// let resultOfSquare1 = square(2);

// console.log(resultOfSquare);
// console.log(resultOfSquare1);


// function calculateArea(width, height){
//     return width * height;
// }
// allArea = calculateArea(20 , 10);
// console.log(allArea);

// function addValues(num1, num2){
// return num1 + num2;
// }
// let numOneBe = 200;
// let numTwoBeStr = 300;
// let resultOfNumbersBe = addValues(numOneBe, numTwoBeStr);

// console.log(resultOfNumbersBe);//output 500

// let resultOfNumbersBe1 = addValues(30, 200);
// console.log(resultOfNumbersBe1);//230
// //object
// let obj={
//     numObj1: 150,
//     numObj2: 300
// };
// let result = addValues(obj.numObj1,obj.numObj2 );
// console.log(result);// 450

// // array
// let numArrayBe = [ 400, 300];
// let resultOfArrayNumbBe = addValues(numArrayBe[0],numArrayBe[1]);
// console.log(resultOfArrayNumbBe);//700



// s
// function addNumbers(number1, number2){ //paremeters
//     let addition = number1 + number2;
//     console.log(addition);
//     return addition;
// }

// addNumbers(20,10);
// let additionEqualsTo = addNumbers(100,300);//arguments or operands
// console.log(additionEqualsTo());



