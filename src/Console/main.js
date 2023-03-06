console.log("~#Test#~");

console.group('Card');//DONE
console.log('Passed')
/*
let  card1=new Card({'color':'red','filling':'full'});
let  card2=new Card({'color':'red','filling':'full'});
let  card3=new Card({'color':'red','outline':'full'});
let  card4=new Card({'color':'red','filling':'empty'});
console.log(card1.attributes);// ATTRIBUTES
console.log(card1.getAttributes());// ATTRIBUTES
console.log(card1.equals(card2));// TRUE
console.log(card1.equals(card3));//FALSE
console.log(card1.equals(card4));//FALSE
*/
console.groupEnd();
console.group('Factory');
console.log('Passed')
// let fact3=new Factory([0,1,2]);
let fact4=new Factory([0,1,2,3],3);
//console.log(fact4.attributesDictionnary);
// let fact5=new Factory([0,1,2,3,4]);
console.groupEnd();

console.group('Deck');
let deck = new Deck([0,1,2,3],3);
console.log("allCards",deck.allCards);
console.log("allCards.length",deck.allCards.length);
console.log("remainingCards.length",deck.remainingCards.length);
console.log("outputCards",deck.outputCards);
console.group("checkSet");

console.log("outputCards 0",deck.outputCards[0]);
console.log("outputCards",deck.outputCards);

console.log("allCards",deck.allCards[0]);
console.log("remainingCards",deck.remainingCards[0]);

console.log(deck.checkSet([deck.outputCards[0],deck.outputCards[1],deck.outputCards[2]]));
console.log("remainingCards.length",deck.remainingCards.length);
console.log("outputCards",deck.outputCards);
console.groupEnd();

/*
console.log("~~BEGINNING~~");
let deck  = new Deck([0,1,2,3],3);
console.log(`All cards : ${deck.allCards.length}`);
//Display all cards
console.log(`All cards display`);
// deck.allCards.forEach(e => {
//    console.log(e.color,e.number,e.shape,e.filling);//no outline
//    console.log(e.color,e.number,e.filling,e.outline);//no shape
//    console.log(e.color,e.number,e.shape,e.outline);//no filling
// });
console.log(`remaining cards : ${deck.remainingCards.length}`)
console.log(`size output ${deck.outputCards.length}`);
console.group('Output cards');
deck.outputCards.forEach(e => {
   console.log(e.getAttributes());
});
console.groupEnd();
console.log(`set already made :${deck.setMade}`);
deck.setMade.forEach(e => {
    console.log(e.color,e.number,e.shape,e.filling);
 });


// CHECK SET
console.log("~~CHECKING SET~~")

console.log("Card to remove: ")
console.log(deck.outputCards[0].getAttributes(),deck.outputCards[1].getAttributes(),deck.outputCards[2].getAttributes())
let customCard=[deck.outputCards[0],deck.outputCards[1],deck.outputCards[2]];
deck.checkSet(customCard);
console.log(`remaining cards : ${deck.remainingCards.length}`)
console.log(`All cards : ${deck.allCards.length}`)
console.log(`size output ${deck.outputCards.length}`);
console.group('Output cards');
deck.outputCards.forEach(e => {
   console.log(e.getAttributes());
});
console.groupEnd();

console.log("~~SET MADE~~");
console.log(`set already made : ${deck.setMade.length}`);
deck.setMade.forEach(e => {//tab of tab of cards of set made
    e.forEach(a=>{
        console.log(a.color,a.number,a.shape,a.filling);
    })
 });
// console.log(deck.setMade)
*/
console.groupEnd();
//let deck5  = new Deck([0,1,2,3,4]);
//console.log(`All cards with 5 attributes size ${deck5.allCards.length}`);
// deck5.allCards.forEach(e => {
//    console.log(e.color,e.number,e.shape,e.filling,e.outline);
// });
//console.log(`Remaining cards ${deck.remainingCards}`);
//console.log(`random : ${deck.getRandCard()}`);


// CHECK SET
// console.log("~~CHECKING ALL SET~~")

// for (let i=0; i<26;i++){
//     console.log(`-----${i}emme itérations-----`)
//     console.log("Card to remove: ")
//     console.log(deck.outputCards[0].getAttributes(),deck.outputCards[1].getAttributes(),deck.outputCards[2].getAttributes())
//     customCard=[deck.outputCards[0],deck.outputCards[1],deck.outputCards[2]];
//     deck.checkSet(customCard);
//     console.log(`remaining cards : ${deck.remainingCards.length}`)
//     console.log(`All cards : ${deck.allCards.length}`)
//     console.log(`size output ${deck.outputCards.length}`);
//     console.group('Output cards');
//     deck.outputCards.forEach(e => {
//        console.log(e.getAttributes());
//     });
// }
// deck.checkSet(customCard);