let user = {
    name : 'John',
    age: 30
};

let clone = {};  // the new empty object

// let's copy all user properties into it
for(let key in user){
    clone[key] = user[key];
}

console.log(clone);

console.log(clone.name);


