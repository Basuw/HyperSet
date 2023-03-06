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


