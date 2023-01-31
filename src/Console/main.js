// import { Card5 } from "../Model/Card5";
// import('../Model/Card5');
//import {Card} from '../Model/Card';

console.log("~#Test#~");
let card4 = new Card('red','2','losange','full');
console.group('Carte 4 attributes');
console.log(`carte de 4 elements : ${card4.color}`);
console.groupEnd();
let card5 = new Card5('blue','2','losange','full','pointillet');
console.group('Carte 5 attributes');
console.log(`carte de 5 elements : ${card5.outline}`);
console.log(`carte de 5 éléments instance de 5: ${card5 instanceof Card5}`);
console.log(`carte de 5 éléments accès par méthode idx 0: ${card5.getAttributes()[0]}`);
console.log(`carte de 5 éléments accès par méthode idx 4: ${card5.getAttributes()[4]}`);
console.groupEnd();
console.group('Error');
try {
    let errCard = new Card5('blue','','losange','full','pointillet');
}catch(errCard){
    if(errCard instanceof EmptyParamaterException){
        console.log('Error in constructor');
    }
    else{
        console.error(errCard);
    }
}
console.groupEnd();
console.group('Deck');
let deck  = new Deck();
console.log(`Output cards ${deck.outputCards}`);
console.log(`set already made ${deck.setMade}`);
console.log(`All cards ${deck.allCards}`);
console.log(`Remaining cards ${deck.remainingCards}`);

console.groupEnd();


console.group('Maths');
let list=[];
list.push(1);
list.push(2);
let gngn=Math.floor(Math.random() * list.length)
console.log(gngn);
console.groupEnd();
