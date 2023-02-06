// import { Card5 } from "../Model/Card5";
// import('../Model/Card5');
//import {Card} from '../Model/Card';

console.log("~#Test#~");
let card4 = new Card4WithoutOutline('red','2','losange','full');
console.group('Carte 4 attributes');
console.log(`carte de 4 elements : ${card4.color}`);
console.groupEnd();

let card5 = new Card5('blue','2','losange','full','pointillet');
console.group('Carte 5 attributes');
console.log(`carte de 5 elements : ${card5.color}`);
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
let deck  = new Deck([0,1,2,3]);
console.log(`All cards with 4 attributes size ${deck.allCards.length}`);
console.log(`size output ${deck.outputCards.length}`);
//Display all cards
console.log(`All cards`);
console.log(deck.allCards)
deck.allCards.forEach(e => {
   console.log(e.color,e.number,e.shape,e.filling);
});
console.log(`Output cards`);
// deck.outputCards.forEach(e => {
//    console.log(e.getAttributes());
// });
console.log(`set already made ${deck.setMade}`);


let customCard=[new Card('red',1,'diamond','stripped')];
//deck.checkSet(customCard);
console.log(`deck size :${deck.allCards.length}`);

console.log(`remaining cars:`);
deck.setMade.forEach(e => {
    console.log(e.color,e.number,e.shape,e.filling);
 });

//let deck5  = new Deck([0,1,2,3,4]);
//console.log(`All cards with 5 attributes size ${deck5.allCards.length}`);
// deck5.allCards.forEach(e => {
//    console.log(e.color,e.number,e.shape,e.filling,e.outline);
// });
//console.log(`Remaining cards ${deck.remainingCards}`);
//console.log(`random : ${deck.getRandCard()}`);

console.groupEnd();
