// function User(name , age){
// this.name = name,
// this.age = age
// }

// const user = new User('Abdulhadi', 30);

// console.log(user);
// console.log(user.name + "  " + user.age);

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }

//   let user = new User("Jack");

//   console.log(user.name); // Jack
//   console.log(user.isAdmin); // false


  //Using object constructor
//   function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function () {
//         if (this.weight > 25) {
//             document.write(this.name + " says Woof!" + '<br/>');
//         } else {
//             document.write(this.name + " says Yip!");
//         }
//     };
// }
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++) {
    dogs[i].bark();

}