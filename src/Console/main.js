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


// CREATE DECK

console.group('Deck');
let deck  = new Deck([0,1,2,3],3);
console.log(`All cards : ${deck.allCards.length}`);
//Display all cards
console.log(`All cards display`);
// deck.allCards.forEach(e => {
//    console.log(e.color,e.number,e.shape,e.filling);//no outline
//    //console.log(e.color,e.number,e.filling,e.outline);//no shape
//    //console.log(e.color,e.number,e.shape,e.outline);//no filling
// });
console.log(`remaining cards : ${deck.remainingCards.length}`)
// deck.remainingCards.forEach(e => {
//     console.log(e.getAttributes());
//  });
console.log(`size output ${deck.outputCards.length}`);
console.log(`Output cards`);
deck.outputCards.forEach(e => {
   console.log(e.getAttributes());
});
console.log(`set already made ${deck.setMade}`);
// deck.setMade.forEach(e => {
//     console.log(e.color,e.number,e.shape,e.filling);
//  });


// CHECK SET
console.log("CHECKING SET")

console.log("Card to remove: ")
console.log(deck.outputCards[0].getAttributes(),deck.outputCards[1].getAttributes(),deck.outputCards[2].getAttributes())
let customCard=[deck.outputCards[0],deck.outputCards[1],deck.outputCards[2]];
deck.checkSet(customCard);
console.log(`remaining cards : ${deck.remainingCards.length}`)
console.log(`All cards : ${deck.allCards.length}`)
console.log(`remaining cards : ${deck.remainingCards.length}`)
// deck.remainingCards.forEach(e => {
//     console.log(e.getAttributes());
//  });
console.log(`size output ${deck.outputCards.length}`);
console.group('Output cards');
deck.outputCards.forEach(e => {
   console.log(e.getAttributes());
});
console.log(`nbCards : ${deck.nbCards}`);
console.groupEnd();


//let deck5  = new Deck([0,1,2,3,4]);
//console.log(`All cards with 5 attributes size ${deck5.allCards.length}`);
// deck5.allCards.forEach(e => {
//    console.log(e.color,e.number,e.shape,e.filling,e.outline);
// });
//console.log(`Remaining cards ${deck.remainingCards}`);
//console.log(`random : ${deck.getRandCard()}`);

console.groupEnd();
