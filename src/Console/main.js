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
// let fact4=new Factory([0,1,2,3],3);
//console.log(fact4.attributesDictionnary);
// let fact5=new Factory([0,1,2,3,4]);
console.groupEnd();

console.group('Deck');
let deck = new Deck([0,1,2,3],3);
console.log("deck.outputCards",deck.outputCards)
console.log("deck.outputCards length",deck.outputCards.length)
console.log("deck.remainingCards",deck.remainingCards)
console.log("deck.remainingCards length",deck.remainingCards.length)
console.log("check set");
deck.checkSet([deck.outputCards[0],deck.outputCards[1],deck.outputCards[2]])
console.log("deck.outputCards",deck.outputCards)
console.log("deck.outputCards length",deck.outputCards.length)

console.log("deck.remainingCards",deck.remainingCards)
console.log("deck.remainingCards length",deck.remainingCards.length)
console.groupEnd();

let tab=[]
tab.push("yeyee")
console.log(tab)
tab.push("gngngn")
console.log(tab)
// CREATE HYPERSET

function checkList(list) {
    // Vérifier si tous les éléments sont identiques
    if (list.every(element => element === list[0])) {
        return 1;
    }

    if ([...new Set(list)].length === list.length) {
        return 0;
    }

    // Si tous les éléments ne sont ni identiques ni différents
    return 2;
}

// Exemple d'utilisation
const list1 = [1, 2, 3, 4];
console.log(checkList(list1)); // Retourne 0

const list2 = [1, 1, 1, 1];
console.log(checkList(list2)); // Retourne 1

const list3 = [1, 2, 3, 1];
console.log(checkList(list3)); // Retourne 2