// let user = {
//     name: "john",
//     age: "28",
//     greeting: function(){
//         console.log("hello");
//     }
// };

// let user = {
//     name: "John",
//     age: 30
//   };

//   user.sayHi = function() {
//    console.log("Hi");
//   };

//   user.sayHi(); // Hello!


// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }

//   let user = makeUser();

//   console.log( user.ref.name ); // Error: Cannot read property 'name' of undefined

// function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this;
//       }
//     };
//   }

//   let user = makeUser();

//   console.log( user.ref().name ); // John


