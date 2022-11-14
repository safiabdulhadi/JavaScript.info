// how to iterate object
const Person = {
    name: 'Abdulhadi',
    age : 22,
    // hobbies: ['football', 'gym', 'cricket', 'runing']
    "my hobbies" : ['football', 'gym', 'cricket', 'runing']
}
// for in loop
//object.key
// for(let key in Person){
    // console.log(key);
    // console.log(Person[key]);
    // console.log(` ${key}  ${Person[key]}`);
//     console.log(key ,Person[key]);
// }

for(let key of Object.keys(Person)){
   console.log(key);
//    console.log(Person[key]);

}