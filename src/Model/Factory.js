class Factory{
    constructor(arrayOfAttributes){
        let length=arrayOfAttributes.length
        this.product=this.concreteCardCreation(arrayOfAttributes,length);
    }
    attributesRequiredFun(arrayOfAttributes,length){
        console.log("arr attr")
        console.log(arrayOfAttributes)
        let attributesRequiredTmp=[];
        let nullArray=[0,0,0,0,0];
        for(let i=0;i<5;i++){
            let find=false;
            for (let j=0;j<length;j++){
                if(i==arrayOfAttributes[j]){
                    attributesRequiredTmp.push(ATTRIBUTES[j]);
                    find=true;
                }
            }
            if(!find){
                attributesRequiredTmp.push(nullArray);
            }
        }
        attributesRequiredTmp.forEach(e=>{
            console.log("tab index")
            console.log(e);
        });
        return attributesRequiredTmp;
    }
    concreteCardCreation(arrayOfAttributes, length){
        let tabOfAllCards=[];
        let attributes=this.attributesRequiredFun(arrayOfAttributes,length);
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
                                console.log("jrentre la frro")
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
            //ERROR
        }
        return tabOfAllCards
    }
}