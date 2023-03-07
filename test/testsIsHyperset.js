let card1 = new Card4WithoutOutline('red', 3, 'wave', 'full');
let card2 = new Card4WithoutOutline('red', 3, 'oval', 'empty');
let card3 = new Card4WithoutOutline('blue', 2, 'oval', 'full');
let card4 = new Card4WithoutOutline('green', 1, 'wave', 'pointed');
let card5 = new Card4WithoutOutline('green', 1, 'wave', 'full');

deckA = [];
deckB = [];
deckC = [];

deckA.push(card1, card2);
deckB.push(card3, card4);
deckC.push(card3, card5);

console.assert(isHyperset(deckA, deckB) == true);
console.assert(isHyperset(deckA, deckC) == false);

let BcardG1 = new Card5('red', 4, 'oval', 'empty', 'fullO');
let BcardG2 = new Card5('red', 3, 'oval', 'full', 'fullO');
let BcardG3 = new Card5('red', 2, 'oval', 'squared', 'fullO');
let BcardG4 = new Card5('red', 1, 'oval', 'pointed', 'fullO');

let BcardD1 = new Card5('green', 3, 'oval', 'pointed', 'cloudy');
let BcardD2 = new Card5('blue', 2, 'oval', 'squared', 'sharpy');
let BcardD3 = new Card5('purple', 4, 'oval', 'full', 'hyphen');
let BcardD4 = new Card5('orange', 1, 'oval', 'empty', 'dotted');
let BcardD5 = new Card5('purple', 4, 'oval', 'stripped', 'hyphen');

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


let Ccard1 = new Card4WithoutShape('blue', 3, 'empty', 'cloudy');
let Ccard2 = new Card4WithoutShape('red', 3, 'empty', 'cloudy');
let Ccard3 = new Card4WithoutShape('green', 3, 'empty', 'cloudy');
let Ccard4 = new Card4WithoutShape('purple', 3, 'empty', 'sharpy');
let Ccard5 = new Card4WithoutShape('purple', 3, 'empty', 'sharpy');
let Ccard6 = new Card4WithoutShape('purple', 3, 'empty', 'sharpy');

CdeckA = [];
CdeckB = [];

CdeckA.push(Ccard1, Ccard2, Ccard3);
CdeckB.push(Ccard4, Ccard5, Ccard6);

console.assert(isHyperset(CdeckA, CdeckB) == false);

