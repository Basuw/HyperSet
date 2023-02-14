import('./Model/Card.js')


function isSet(cards)
{
    let attributesMatrix = [];
    
    cards.forEach(element => {
        attributesMatrix.push(element.getAttributes());
    });
    // Idéalement check si toute les listes d'attributs sont de même taille
    for(let i = 0; i < attributesMatrix[0].length; i++) {
        let listAttributes = []
        for(let j = 0; j < attributesMatrix.length; j++) {
            listAttributes.push(attributesMatrix[j][i]);
        }
        if(!checkAttributes(listAttributes)){
            return false;
        }
    }
    return true;        
}


function checkAttributes(attributes){
    let orderingMethod = "null"; // Can only take ["null", "same", "different"]
    let boolLoop = true;
    attributes.forEach((value, index) => {
        if(index !== attributes.length)
        {
            for (let i = index+1; i < attributes.length; i++)
            {
                if(attributes[i] === value)
                {
                    if(orderingMethod === "null" || orderingMethod === "same")
                    {
                        orderingMethod = "same";
                    }
                    else
                    {
                        boolLoop = false;
                    }
                }
                else
                {
                    if(orderingMethod === "null" || orderingMethod === "different")
                    {
                        orderingMethod = "different"
                    }
                    else
                    {
                        boolLoop = false
                    }
                }
                
            }
        }
    });
    return boolLoop === true;
}


function nbrSets(deck, setSize){
    matrix = []
    // Remplie la matrice des valeurs du deck
    for (i=0;i<setSize;i++){
        matrix[i] = []
        for (j=i;j<(deck.length - setSize + i + 1);j++){
            // Check si ca marche bien
            matrix[i].push(deck[j]);
        }
    }
    let res = 0
    console.log(matrix)
    for (p =0 ;p < matrix[0].length;p++){
        console.log("JE SUIS P")
        console.log(p)
        let currentSet = []
        res += forEachMember(0,p,matrix,currentSet,res)
    }
    return res
}

function forEachMember(x,y,matrix,tmp,counter){
    console.log('X  :',x)
    console.log('Y : ',y)
    currentSet = tmp
    res = counter
    currentSet[x] = (matrix[x][y])
    console.log(currentSet)
    if(matrix.length === currentSet.length){
        console.log("JE SUIS DEDANS")
        if(isSet(currentSet)){
            currentSet.pop()
            return res + 1
        }
        else{
            currentSet.pop()
            return res
        }
    }
    else{
        console.log("JE SUIS PQS DANS LE IF")
        console.log(y)
        console.log(matrix[x+1].length)
        for(let i=y; i< matrix[x+1].length; i++){
            console.log("JAPPELLE LE FONC")
            res += forEachMember(x+1,i,matrix, currentSet,res)
        }
        return res
    }
}

// "Stub de test"
let card1 = new Card("Purple","1","Triangle","Full");   
let card2 = new Card("Purple","2","Triangle","Full");   
let card3 = new Card("Purple","3","Triangle","Full");
let card8 = new Card("Purple","4","Triangle","Full");
let card9 = new Card("Purple","5","Triangle","Full");
let card0 = new Card("Purple","6","Triangle","Full");
let card10 = new Card("Purple","7","Triangle","Full");

let card4 = new Card("Purple","1","Triangle","Full");   
let card5 = new Card("Purple","2","Triangle","Full");   
let card6 = new Card("Purple","1","Triangle","Full");   


let deck = [card1,card2,card3,card8,card9,card0,card10]

let nbrSet = nbrSets(deck,3)
console.log("JE SUIS LE RESULTAT")
console.log(nbrSet)
