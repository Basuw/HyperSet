class Factory{
    constructor(arrayOfAttributes){
        let length=arrayOfAttributes.length
        this.product=this.concreteCardCreation(arrayOfAttributes);
        console.log("arrayOfAttributes",this.funArrayOfAttributes(arrayOfAttributes));
        console.log("attributesDictionnary",this.attributesDictionnary(arrayOfAttributes,this.funArrayOfAttributes(arrayOfAttributes)))
    }
    /**
     *
     * @param {*} arrayOfIdxAttributes index of attributes in ATTRIBUTES
     * @returns array of all attributes
     */
    funArrayOfAttributes(arrayOfIdxAttributes){
        let attr=[];
        let l=arrayOfIdxAttributes.length;
        arrayOfIdxAttributes.forEach(e => {
            for (let i=0;i<l;i++){    
                attr.push(ATTRIBUTES[e][i]);
            }
        });
        return attr;
    }
    /**
     * 
     * @param {*} arrayOfIdxAttributes index of attributes in ATTRIBUTES
     * @param {*} arrayOfAllAttributes array of all attributes
     * @returns dictionnary with key : attribute and value : array of the possibilities of attributes
     */
    attributesDictionnary(arrayOfIdxAttributes,arrayOfAllAttributes){
        let l=arrayOfIdxAttributes.length;
        let dico={};
        for (let i=0;i<l;i++){
            let tmp=[]
            for(let j=0;j<l;j++){
                tmp.push(arrayOfAllAttributes[(i*l)+j]);
            }
            dico[IDX_ATTRIBUTES[arrayOfIdxAttributes[i]]]=tmp;
        }
        return dico;
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
     * @biref create the right cards : 3,4,5 attributes
     * @param {*} arrayOfAttributes 
     * @param {*} length 
     * @returns array of all cards
     */
    concreteCardCreation(attributesDico){
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