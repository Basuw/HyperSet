// Pseudo code
//
/*
 * function checkReslt(array <Cards>)
 * {
 *      new array<array<Attrib>> matrice = vide
 *
 *      forEach(array: value)
 *      {
 *          matrice.add(value.getAttrib)
 *      }
 *      Check all length of matrice
 *      for(i = 0; i<matrice[0])
 *          let array<attribut> tab
 *          for (j=0; j<len(matrice))
 *              tab.push matrice[j][i]
 *          if(!checkatrib(tab))
 *          {
 *              return false;
 *          }
 *      return true;
 *
 * }
 *
 *
 * */


function main()
{
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

    console.group("TEST TRUE")
    if(isSet([card1,card2,card3,card8,card9,card0,card10]))
    {
        console.log("TRUE")
    }
    else
    {
        console.log("FALSE")
    }
    console.groupEnd()
}

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
