let recipeMap = new Map([
['cucumber', 500],
['tomatoes', 350],
['onion', 50]
]);

// iterate over keys (vegetables)
for(let vegetables of recipeMap.keys()){
    console.log(vegetables);
}

// iterate over values (amounts)
for(let amounts of recipeMap.values()){
    console.log(amounts);
}


// runs the function for each (key , value ) pair

recipeMap.forEach((value, key )=>{

    console.log(`  ${key} : ${value}`);
});