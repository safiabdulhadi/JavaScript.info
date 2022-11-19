let codes = {
    "49": "Germany",
    "33": "France",
    "41": "SwitwerLand",
    "44": "Great Britain",
    "1" : "USA"
}
for(let code in codes){
    console.log(code); // 49, 33 , 41, 1
    console.log(code + " " + codes[code]);
    console.log(`code of contries ${code} + ${codes[code]}`)
}
