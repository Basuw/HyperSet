class Factory{
    constructor(arrayOfAttributes){
        let length=arrayOfAttributes.length
        this.product=this.concreteCardCreation(arrayOfAttributes,length);
        console.log("arrayOfAttributes",this.funArrayOfAttributes(arrayOfAttributes));
    }
    funArrayOfAttributes(arrayOfAttributes){
        let attr=[];
        let l=arrayOfAttributes.length;
        arrayOfAttributes.forEach(e => {
            for (let i=0;i<l;l++){    
                attr.push(e[i]);
            }
        });
    }




    /**
     * @brief check if i in arrayOfAttributes
     * @param {*} i value
     * @param {*} arrayOfAttributes array
     * @returns boolean
     */
    inArray(i,arrayOfAttributes){
        let finded=false;
        for (let j=0;j<arrayOfAttributes.length;j++){
            if(i==arrayOfAttributes[j]){
                finded=true;
            }
        }
        return finded
    }
    /**
     * @brief create a matrix with the attributes of the cards : if attributes not defined : value 0
     * @param {*} arrayOfAttributes 
     * @param {*} length 
     * @returns matrix of attributes
     */
    attributesRequiredFun(arrayOfAttributes){
        let attributesRequiredTmp=[];
        let nullArray=[0,0,0,0,0];
        for(let i=0;i<5;i++){
            if(!this.inArray(i,arrayOfAttributes)){
                attributesRequiredTmp.push(nullArray);
            }
            else{
                attributesRequiredTmp.push(ATTRIBUTES[i]);
            }
        }
        console.log('attributesRequiredFun',attributesRequiredTmp);
        return attributesRequiredTmp;
    }
    /**
     * @biref create the right cards : 3,4,5 attributes
     * @param {*} arrayOfAttributes 
     * @param {*} length 
     * @returns array of all cards
     */
    concreteCardCreation(arrayOfAttributes, length){
        let tabOfAllCards=[];
        let attributes=this.attributesRequiredFun(arrayOfAttributes);
        let nbAttributes=length
        if(nbAttributes==3){
            for (let c=0; c<nbAttributes-1; c++){
                for (let n=0; n<nbAttributes-1; n++){
                    for (let s=0; s<nbAttributes-1; s++){
                        tabOfAllCards.push(new Card3(ATTRIBUTES[0][c],ATTRIBUTES[1][n],ATTRIBUTES[2][s]));
                    }
                }
            }
        }
        else if(nbAttributes==4){
            for (let n=0; n<nbAttributes-1; n++){
                for (let s=0; s<nbAttributes-1; s++){
                    for (let f=0; f<nbAttributes-1; f++){
                        for (let o=0; o<nbAttributes-1; o++){
                            if(attributes[0][0]===0){
                                tabOfAllCards.push(new Card4WithoutColor(attributes[1][n],attributes[2][s],attributes[3][f],attributes[4][o]));
                            }
                            else if(attributes[1][0]===0){
                                tabOfAllCards.push(new Card4WithoutNumber(attributes[0][n],attributes[2][s],attributes[3][f],attributes[4][o]));
                            }
                            else if(attributes[2][0]===0){
                                tabOfAllCards.push(new Card4WithoutShape(attributes[0][n],attributes[1][s],attributes[3][f],attributes[4][o]));
                            }
                            else if(attributes[3][0]===0){
                                tabOfAllCards.push(new Card4WithoutFilling(attributes[0][n],attributes[1][s],attributes[2][f],attributes[4][o]));
                            }
                            else if(attributes[4][0]===0){
                                tabOfAllCards.push(new Card4WithoutOutline(attributes[0][n],attributes[1][s],attributes[2][f],attributes[3][o]));
                            }
                        }
                    }
                }
            }
        }
        else if(nbAttributes==5){
            for (let c=0; c<nbAttributes-1; c++){
                for (let n=0; n<nbAttributes-1; n++){
                    for (let s=0; s<nbAttributes-1; s++){
                        for (let f=0; f<nbAttributes-1; f++){
                            for (let o=0; o<nbAttributes-1; o++){
                                tabOfAllCards.push(new Card5(attributes[0][c],attributes[1][n],attributes[2][s],attributes[3][f],attributes[4][o]));
                            }
                        }
                    }
                }
            }
        }
        else{
            throw new EmptyParamaterException("ilegal number of attributes");
        }
        return tabOfAllCards
    }
}