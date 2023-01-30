/*var fs = require("fs")
var vm = require('vm')

var content = fs.readFileSync(filename)
vm.runInThisContext(content)
*/
console.log("~#Test#~");
let card4 = new Card('red','2','losange','full');
console.log(`carte de 4 elements : ${card4.color}`);
let card5 = new Card5('blue','2','losange','full','pointillet');
console.log(`carte de 5 elements : ${card5.outline}`);
console.log(`carte de 5 elements : ${card5 instanceof Card5}`);
