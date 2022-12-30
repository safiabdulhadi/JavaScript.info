// let str = "Hello";

// does the same as
// for (let char of str){
//     console.log(char);
// }


// let iterator = str[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   console.log(result.value); // outputs characters one by one
// }

// 2 ------------ Array.from
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };

  let arr = Array.from(arrayLike); // (*)
  console.log(arr.pop()); // World (method works)
console.log(arr);


// 3 Array.from method
let str = "This is for check";
let str2Array = Array.from(str);
console.log(str2Array);

let num = "12345";
for (let i of num) {
    console.log(i);
}
// 1 2 3 4 5