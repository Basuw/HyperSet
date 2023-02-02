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
    

}

function isSet(card)
{
    let matrice = [];

    card.forEach(element => {
        matrice.push(element.getAttribute());
    });
    // Idéalement check si toute les listes d'attributs sont de même taille
    for (let i = 0; i < matrice[0]; i++) {
        let listAttrib = []
        for (let j = 0; j < matrice[i]; j++) {
            listAttrib.push(j);
        }
        if(!checkattrib(j)){
            return false;
        }
    return true;        
    }
}


function checkattrib(attribs){
    let orderingMethod = "null"; // Can only take ["null", "same", "different"]
    attribs.forEach(function callback(value, index)
    {
        if(!index === attribs.length)
        {
            for (let i = index+1; i < array.length; i++)
            {
                if(attribs[i] === value)
                {
                    if(orderingMethod === "null" || orderingMethod === "same")
                    {
                        orderingMethod = "same";
                    }
                    else
                    {
                        return false;
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
                        return false
                    }
                }
                
            }
        }
    });
    return true;
}
