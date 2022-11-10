// for (let i = 0; i < 10; i++) {
//     if(i % 9){
//         console.log(i);
//     }

// }


// for(let i = 0; i < 10; i++) {
//     if(i % 2 === 0){

//         console.log(i);
//     }
// }


for(let i = 0; i < 10; i++) {
    if(i % 1 == 0){
    continue;
        console.log(i);
    }
}


// for (let i = 0; i < 10; i++) {

    // si vrai, saute le reste du corps
//     if (i % 2 == 0) continue;

//     console.log(i); // 1, ensuite 3, 5, 7, 9
//   }




/* Réécrivez le code en modifiant la boucle for en while sans modifier son comportement
(la sorite doit rester la même)/
*/

// for(let i = 0; i < 3; i++) {
//     console.log(`number ${i}`);
// }
let i = 0;
while(i < 3){
    console.log(`number ${i}`);
    i++;
}