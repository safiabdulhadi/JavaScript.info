//   lexical Scope // means inside the function declaration lexical environement

 const myVar = "value1";
function myApp(){
    // const myVar = "value1";

    function myFunc(){
        // const myVar = 'values59';
        const myFunc2 = () => {
            console.log("inside myfunc", myVar);
        }
        myFunc2();
    }
    const myFunc3 = function(){}
        const myFunc4 = () => {}

    console.log(myVar);
    myFunc();
}
myApp();