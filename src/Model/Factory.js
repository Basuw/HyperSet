class Factory{
    constructor(arrayOfAttributes, nbAttributes){
        this.nbAttr=nbAttributes;
        this.dicoAttributes=this.attributesDictionnary(arrayOfAttributes,this.funArrayOfAttributes(arrayOfAttributes));
        this.product=this.concreteCardCreation(arrayOfAttributes);      
        // console.log("arrayOfAttributes",this.funArrayOfAttributes(arrayOfAttributes));
        // console.log("attributesDictionnary",this.dicoAttributes)
        // console.log("attributesName",this.attributesName(this.dicoAttributes));
        // console.log("allCards",this.product);

    }
    /**
     *
     * @param {*} arrayOfIdxAttributes index of attributes in ATTRIBUTES
     * @returns array of all attributes
     */
    funArrayOfAttributes(arrayOfIdxAttributes){//working✅
        let attr=[];
        let l=this.nbAttr;
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
            for(let j=0;j<this.nbAttr;j++){
                tmp.push(arrayOfAllAttributes[(i*this.nbAttr)+j]);
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
        let nbAttributes=this.nbAttr;
        if(attributes.length==3){
            for (let c=0; c<nbAttributes; c++){
                for (let n=0; n<nbAttributes; n++){
                    for (let s=0; s<nbAttributes; s++){
                        attribDic[attributes[0]]=dicoAttributes[attributes[0]][a]
                        attribDic[attributes[1]]=dicoAttributes[attributes[1]][b]
                        attribDic[attributes[2]]=dicoAttributes[attributes[2]][c]
                        tabOfAllCards.push(new Card(attribDic))
                    }
                }
            }
        }
        else if(attributes.length==4){
            for (let a=0; a<nbAttributes; a++){
                for (let b=0; b<nbAttributes; b++){
                    for (let c=0; c<nbAttributes; c++){
                        for (let d=0; d<nbAttributes; d++){
                            let attribDic = {};
                            attribDic[attributes[0]]=dicoAttributes[attributes[0]][a]
                            attribDic[attributes[1]]=dicoAttributes[attributes[1]][b]
                            attribDic[attributes[2]]=dicoAttributes[attributes[2]][c]
                            attribDic[attributes[3]]=dicoAttributes[attributes[3]][d]
                            tabOfAllCards.push(new Card(attribDic))
                        }
                    }
                }
            }
        }
        else if(attributes.length==5){
            for (let a=0; a<nbAttributes; a++){
                for (let b=0; b<nbAttributes; b++){
                    for (let c=0; c<nbAttributes; c++){
                        for (let d=0; d<nbAttributes; d++){
                            for (let e=0; e<nbAttributes; e++){
                                attribDic[attributes[0]]=dicoAttributes[attributes[0]][a]
                                attribDic[attributes[1]]=dicoAttributes[attributes[1]][b]
                                attribDic[attributes[2]]=dicoAttributes[attributes[2]][c]
                                attribDic[attributes[3]]=dicoAttributes[attributes[3]][d]
                                attribDic[attributes[4]]=dicoAttributes[attributes[4]][e]
                                tabOfAllCards.push(new Card(attribDic))
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