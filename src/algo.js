//import('./Model/Card.js')


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

// The digit refere to the number of cards required to make a set
//
function numberOfSets3(deck){
    let res = 0
    for(i=0;i<deck.length - 2;i++){
        for(j=i+1;j<deck.length-1;j++){
            for(k=j+1;k<deck.length;k++){
                if(isSet([deck[i],deck[j],deck[k]])){
                    //console.log(deck[i],deck[j],deck[k])
                    res += 1
                }
            }
        }
    }
    return res
}

function numberOfSets4(deck){
    let res = 0
    for(i = 0 ; i < deck.length - 3; i ++){
        for(j = i+1 ; j < deck.length - 2; j++){
            for(k = j+1 ; k < deck.length - 1 ; k++){
                for(l = k + 1 ; l < deck.length;l++){
                    if(isSet([deck[i],deck[j],deck[k]])){
                        //console.log(deck[i],deck[j],deck[k],deck[l])
                        res += 1
                    }
                }
            }
        }
    }
    return res
}

function numberOfSets5(deck){
    let res = 0
    for(i = 0 ; i < deck.length - 4; i ++){
        for(j = i+1 ; j < deck.length - 3; j++){
            for(k = j+1 ; k < deck.length - 2 ; k++){
                for(l = k + 1 ; l < deck.length - 1;l++){
                    for(m = l + 1; m <deck.length;m++){
                        if(isSet([deck[i],deck[j],deck[k]])){
                            //console.log(deck[i],deck[j],deck[k],deck[l],deck[m])
                            res += 1
                        }
                    }
                }
            }
        }
    }
    return res
}

/**
 * 
 * @param {*} deck 
 * @param {*} numberForSet 
 * @returns 
 */
function setsCounter(deck, numberForSet){
    if(numberForSet === 3){
        return numberOfSets3(deck)
    }
    if(numberForSet === 4){
        return numberOfSets4(deck)
    }
    if(numberForSet === 5){
        return numberOfSets5(deck)
    }
    console.error('The number of cards in a Set is not existing', numberForSet)
}

function createElements(attributsCartes, listeAttributs) {
    let l = []
    let verif;
    listeAttributs.forEach(element => {
        verif = false;
        attributsCartes.forEach(attribCartes => {
            if (element == attribCartes) {
                verif = true;
            }
        })
        if (verif == false) {
            l.push(element);
        }
    });
    return l
}

function trouveElements(attributsCartes) {

    let x;

    TAB_COLOR.forEach(element => {
        if (element == attributsCartes[0]) {
            x = createElements(attributsCartes, TAB_COLOR);
        }
    });

    TAB_NUMBER.forEach(element => {
        if (element == attributsCartes[0]) {
            x = createElements(attributsCartes, TAB_NUMBER);
        }
    });

    TAB_SHAPE.forEach(element => {
        if (element == attributsCartes[0]) {
            x = createElements(attributsCartes, TAB_SHAPE);
        }
    });

    TAB_FILLING.forEach(element => {
        if (element == attributsCartes[0]) {
            x = createElements(attributsCartes, TAB_FILLING);
        }
    });

    TAB_OUTLINE.forEach(element => {
        if (element == attributsCartes[0]) {
            x = createElements(attributsCartes, TAB_OUTLINE);
        }
    });

    return x;
}

function createCard(cards) {

    let attributesMatrix = [];
    let carteFinale = [];
    let listeInter = [];


    cards.forEach(element => {
        attributesMatrix.push(element.getAttributes());
    });

    for (let i = 0; i < attributesMatrix[0].length; i++) {
        listeInter = [];
        attributesMatrix.forEach(element => {
            listeInter.push(element[i]);
        });


        //S'ils sont tous égaux
        if (listeInter.every(element => element === listeInter[0])) {
            l = []
            l.push(listeInter[0])
            carteFinale.push(l);
        }
        else {
            //S'ils sont tous différents
            if ([...new Set(listeInter)].length === listeInter.length) {
                carteFinale.push(trouveElements(listeInter));
            }
            //Sinon
            else {
                carteFinale.push([]);
            }
        }
    }
    return carteFinale;
}

function isHyperset(cardsLeft, cardsRight) {
    left = createCard(cardsLeft)
    right = createCard(cardsRight)
    let verif;

    for (let i = 0; i < left.length; i++) {

        verif = false;
        left[i].forEach(elementG => {
            right[i].forEach(elementD => {
                if (elementD == elementG) {
                    verif=true
                }
            })
        })
        if (verif == false) {
            return false;
        }
    }
    return true;
}

function numberOfHyperset2(deck) {

    let res = 0

    for (i = 0; i < deck.length - 3; i++) {
        for (j = i + 1; j < deck.length - 2; j++) {
            for (k = j + 1; k < deck.length - 1; k++) {
                for (lapin = k + 1; lapin < deck.length; lapin++) {
                    console.log(" i,j,k,l :", i, j, k, lapin)
                    if (isHyperset([deck[i], deck[j]], [deck[k], deck[lapin]])) {
                        console.log(deck[i],deck[j],deck[k],deck[lapin])
                        res += 1
                    }
                }
            }
        }
    }
    return res
}

function numberOfHyperset3(deck) {
    let res = 0
    for (i = 0; i < deck.length - 5; i = i + 1) {
        for (j = i + 1; j < deck.length - 4; j = j + 1) {
            for (k = j + 1; k < deck.length - 3; k = k + 1) {
                for (lolita = k + 1; lolita < deck.length - 2; lolita = lolita + 1) {
                    for (m = lolita + 1; m < deck.length - 1; m = m + 1) {
                        for (n = m + 1; n < deck.length; n = n + 1) {
                            //console.log(i, j, k, lolita, m, n)
                            if (isHyperset([deck[i], deck[j], deck[k]], [deck[lolita], deck[m], deck[n]])) {
                                res += 1
                            }
                        }
                    }
                }
            }
        }
    }
    return res

}

