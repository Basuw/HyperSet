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
let errCard = new Card5('blue','','losange','full','pointillet');
console.groupEnd();
