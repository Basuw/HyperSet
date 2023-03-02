class Factory{
    constructor(arrayOfAttributes){
        this.dicoAttributes=this.attributesDictionnary(arrayOfAttributes,this.funArrayOfAttributes(arrayOfAttributes));
        console.log("arrayOfAttributes",this.funArrayOfAttributes(arrayOfAttributes));
        console.log("attributesDictionnary",this.dicoAttributes)
        console.log("attributesName",this.attributesName(this.dicoAttributes));
        this.product=this.concreteCardCreation(arrayOfAttributes);
        console.log("allCards",this.product);

    }
    /**
     *
     * @param {*} arrayOfIdxAttributes index of attributes in ATTRIBUTES
     * @returns array of all attributes
     */
    funArrayOfAttributes(arrayOfIdxAttributes){//working✅
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
    attributesDictionnary(arrayOfIdxAttributes,arrayOfAllAttributes){//working✅
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
    inArray(i,arrayOfAttributes){//toTest⌛
        let finded=false;
        for (let j=0;j<arrayOfAttributes.length;j++){
            if(i==arrayOfAttributes[j]){
                finded=true;
            }
        }
        return finded
    } 
    /**
     * 
     * @param {*} dico dictionnary of attributes
     * @returns array of the key : name of the attributes
     */
    attributesName(dico){//working✅
        let attributes=[]
        Object.entries(dico).forEach(function([key, value]) {
            attributes.push(key);
        });
        return attributes
    }
    /**
     * @brief create the right cards : 3,4,5 attributes
     * @param {*} arrayOfAttributes 
     * @param {*} length 
     * @returns array of all cards
     */
    concreteCardCreation(){//working✅
        let tabOfAllCards=[];
        let dicoAttributes=this.dicoAttributes
        let attributes=this.attributesName(dicoAttributes);
        let nbAttributes=attributes.length;
        console.log('nbAttributes',nbAttributes)
        if(nbAttributes==3){
            for (let c=0; c<nbAttributes; c++){
                for (let n=0; n<nbAttributes; n++){
                    for (let s=0; s<nbAttributes; s++){
                        let attr1=attributes[0];
                        let attr2=attributes[1];
                        let attr3=attributes[2];
                        tabOfAllCards.push(new Card({attr1:dicoAttributes[attr1][c],attr2:dicoAttributes[attr2][n],attr3:dicoAttributes[attr3][s]}))
                    }
                }
            }
        }
        else if(nbAttributes==4){
            for (let a=0; a<nbAttributes; a++){
                for (let b=0; b<nbAttributes; b++){
                    for (let c=0; c<nbAttributes; c++){
                        for (let d=0; d<nbAttributes; d++){
                            let attr1=attributes[0];
                            let attr2=attributes[1];
                            let attr3=attributes[2];
                            let attr4=attributes[3];
                            tabOfAllCards.push(new Card({attr1:dicoAttributes[attr1][a],attr2:dicoAttributes[attr2][b],attr3:dicoAttributes[attr3][c],attr4:dicoAttributes[attr4][d]}))
                        }
                    }
                }
            }
        }
        else if(nbAttributes==5){
            for (let a=0; a<nbAttributes; a++){
                for (let b=0; b<nbAttributes; b++){
                    for (let c=0; c<nbAttributes; c++){
                        for (let d=0; d<nbAttributes; d++){
                            for (let e=0; e<nbAttributes; e++){
                                let attr1=attributes[0];
                                let attr2=attributes[1];
                                let attr3=attributes[2];
                                let attr4=attributes[3];
                                let attr5=attributes[4];
                                tabOfAllCards.push(new Card({attr1:dicoAttributes[attr1][a],attr2:dicoAttributes[attr2][b],attr3:dicoAttributes[attr3][c],attr4:dicoAttributes[attr4][d],attr5:dicoAttributes[attr5][e]}))
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
    /*
    concreteCardCreation(attributesDico){//progress
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
    }*/
}