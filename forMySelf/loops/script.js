let fruits = ['apple','banana', 'mango','orange'];
console.log(fruits);

// for(fruit in fruits){
//     console.log(fruit);
// }
// index 0 1 2 3
// for(fruit of fruits){
//     console.log(fruit);
// }
//  output apple banana mango orange

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    //  output apple banana mango orange
}
for(let i = 0; i < fruits.length; i++){
    console.log(i);
    //  output 0 1 2 3
}