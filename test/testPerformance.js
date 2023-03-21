
console.log('Debut de l\'execution');

/*setTimeout(function () {
	let fin = new Date().getTime();
	let tempsEcoule = fin - debut;
	console.log("Temps ecoulé : " + tempsEcoule + " millisecondes");

}, 5000);
*/

let ite = 0;
let cpt=0

while (ite < 5) {
	let deck = new Deck([0, 1, 2, 3], 4);

	let debut = new Date().getTime()

	numberOfSets3(deck.outputCards)
	//numberOfHyperset2(deck.outputCards)



	let fin = new Date().getTime()
	let tempsEcoule = fin - debut
	console.log("Temps ecoule : " + tempsEcoule + " millisecondes")

	cpt = cpt + tempsEcoule
	ite=ite+1
}

console.log(cpt/5)

