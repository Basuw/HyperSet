let card1 = new Card({'color':'red', 'number':3, 'shape':'wave','filling':'full'});
let card2 = new Card({'color':'red', 'number':3, 'shape':'oval','filling':'empty'});
let card3 = new Card({'color':'blue', 'number':2, 'shape':'oval', 'fillin':'full'});
let card4 = new Card({'color':'green', 'number':1, 'shape':'wave', 'fillin':'pointed'});
let card5 = new Card({'color':'green', 'number':1, 'shape':'wave', 'fillin':'full'});
deckA = [];
deckB = [];
deckC = [];

deckA.push(card1, card2);
deckB.push(card3, card4);
deckC.push(card3, card5);

console.assert(isHyperset(deckA, deckB) == true);
console.assert(isHyperset(deckA, deckC) == false);

let BcardG1 = new Card({'color':'red', 'number':4, 'shape':'wave','filling':'empty','outline':'continuous'});
let BcardG2 = new Card({'color':'red', 'number':3, 'shape':'wave','filling':'full','outline':'continuous'});
let BcardG3 = new Card({'color':'red', 'number':2, 'shape':'wave','filling':'squared','outline':'continuous'});
let BcardG4 = new Card({'color':'red', 'number':1, 'shape':'wave','filling':'pointed','outline':'continuous'});

let BcardD1 = new Card({'color':'green', 'number':3, 'shape':'oval','filling':'pointed','outline':'cloudy'});
let BcardD2 = new Card({'color':'blue', 'number':2, 'shape':'oval','filling':'squared','outline':'sharpy'});
let BcardD3 = new Card({'color':'purple', 'number':4, 'shape':'oval','filling':'full','outline':'hyphen'});
let BcardD4 = new Card({'color':'orange', 'number':1, 'shape':'oval','filling':'empty','outline':'dotted'});
let BcardD5 = new Card({'color':'purple', 'number':4, 'shape':'oval','filling':'stripped','outline':'hyphen'});


BdeckA = [];
BdeckB = [];
BdeckC = [];
BdeckD = [];
BdeckE = [];


BdeckA.push(BcardG1, BcardG2, BcardG3);
BdeckB.push(BcardD1, BcardD2, BcardD3);
BdeckC.push(BcardD1, BcardD2, BcardD5);
BdeckD.push(BcardG1, BcardG2, BcardG3, BcardG4);
BdeckE.push(BcardD1, BcardD2, BcardD3, BcardD4);

console.assert(isHyperset(BdeckA, BdeckB) == true);
console.assert(isHyperset(BdeckA, BdeckC) == false);
console.assert(isHyperset(BdeckD, BdeckE) == true);