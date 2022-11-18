// let user = {
//     name: 'Abdulhadi',
//     age : '28'
// }

// console.log(user); //objec
// console.log(user.name); // Abdulhadi


// let fruit = prompt("Which fruit to buy ?", "apple");
// let bag = {
//     [fruit]: 5,
// };
// console.log(bag.apple);

// function makeUser(name, age){
//     return {
//         name: name,
//         age: age
//     };

// }
// let user = new makeUser("Abdulhadi", 28);
// console.log(user.name);

// function makeUser(name, age){
//     this.name = name;
//     this.age = age;
// };

// let user = new makeUser("Abdulhadi",28);
// console.log(user.name + " " + user.age);

// let obj = {
//      0: "0"
// };

// console.log(obj[0]);
// console.log(obj['0']);

// let user = {
//     name: 'Abdulhadi',
//     surName: "SAFI",
//     age: 28

// }

// for(let prop in user){
//     console.log(prop  + ' : ' + user[prop]);
// }


/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/
// let user = {
//     name : 'John',
//     surname: 'Smith',
// };
// console.log(user);
// user.name = 'Pete';
// console.log(user);

// delete user.name;
// console.log(user);

// let salaries = {
//     Jhon: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;

// for(let prop in salaries){
//     sum += salaries[prop];
// }
// console.log(sum);


// let user = {
//     name: 'Abdulhadi',
//     age: 28,
//     'like birds': true
// }
// console.log(user);
// console.log(user.name);

// user.name = 'change the name of the user';
// console.log(user.name);

// user.getAge = function(){
//     return this.age;
// }
// console.log(user.getAge());

// let user ={
//     name : 'Abdulhadi'
// };
// let key = 'likes birds';
// // user["key"] = true;
// user[key] = true;

// console.log(user);
// // console.log(user);
// let result = 'name';
// console.log(user['name']);

function makeUser(name, age){
    let userDetails = {
        name: name,
        age: age
    }
    return userDetails;

}

let user = makeUser("Abdulhadi", 28);
console.log(user);










