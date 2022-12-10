let user = {
    name : 'John',
    age: 34
}

for(let value of Object.values(user)){
    console.log(value);
}


function sumSalaries(salaires){
let sum = 0;
for(let Salary of Object.values(salaires)){
    sum += Salary;
}
return sum;
}


let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 400
};

console.log(sumSalaries(salaries)); // 800



