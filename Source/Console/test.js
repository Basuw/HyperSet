// import { Card5 } from "../Model/Card5";
// import('../Model/Card5');
//import {Card} from '../Model/Card';

console.log("~#Test#~");
let card4 = new Card('red','2','losange','full');
console.log(`carte de 4 elements : ${card4.color}`);
let card5 = new Card5('blue','2','losange','full','pointillet');
console.log(`carte de 5 elements : ${card5.outline}`);
console.log(`carte de 5 éléments instance de 5: ${card5 instanceof Card5}`);
console.log(`carte de 5 éléments accès par méthode : ${card5.getAttributes()[0]}`);
