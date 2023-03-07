console.log("TEST FOR ISSET")

let card1 = new Card5("bleu","1","rond","remplis","plein")
let card2 = new Card5("bleu","2","rond","remplis","plein")
let card3 = new Card5("bleu","3","rond","remplis","plein")
let card4 = new Card5("bleu","4","rond","remplis","plein")
let card5 = new Card5("bleu","5","rond","remplis","plein")

let card6 = new Card5("vert","6","carre","vide","tapis")


let realSet = [card1,card2,card3,card4,card5]
let unRealSet = [card2,card3,card4,card5,card6]

console.group("FOR SET OF 5")

console.log("Number of Sets -> 1")
console.assert(numberOfSets5(realSet)==1)

console.log("Number of Sets -> 0")
console.assert(numberOfSets5(unRealSet)==0)

console.groupEnd()


card1 = new Card4WithoutColor("1","rond","plein","tapis")
card2 = new Card4WithoutColor("2","rond","plein","tapis")
card3 = new Card4WithoutColor("3","rond","plein","tapis")
card4 = new Card4WithoutColor("4","rond","plein","tapis")

card5 = new Card4WithoutColor("4","carre","vide","plein")

realSet = [card1,card2,card3,card4]
unRealSet = [card2,card3,card4,card5]


console.group("FOR SET OF 4")

console.log("Number of Sets -> 1")
console.assert(numberOfSets4(realSet)==1)

console.log("Number of Sets -> 0")
console.assert(numberOfSets4(unRealSet)==0)

console.groupEnd()
