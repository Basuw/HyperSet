class Deck{
    /**
     * 
     * @param {*} attributes : array with the attributes index for the cards
     */
    constructor(attributes,nbAttributes){
        let attributesRequired=this.attributesRequiredFun(attributes);
        attributesRequired.forEach(e=>{
            for(let i=0;i<e.length;i++){
                console.log(e[i]);
            }
            console.log(`lenght: ${e.length}`);
            console.log('------');
        });
        this.allCards=this.createCards(attributesRequired,nbAttributes);// All the cards in the game
        this.remainingCards=this.allCards;// cards in the stack
        this.outputCards=[];// 12 cards lay on the table 
        this.setMade=[];// array with all the set already mades (array of set)
        //this.createDeck();
    }
    attributesRequiredFun(attributes){
        let attributesRequiredTmp=[];
        let nullArray=[0,0,0,0,0];
        for(let i=0;i<5;i++){
            let find=false;
            for (let j=0;j<attributes.length;j++){
                if(i==attributes[j]){
                    attributesRequiredTmp.push(ATTRIBUTES[j]);
                    find=true;
                }
            }
            if(!find){
                attributesRequiredTmp.push(nullArray);
            }
        }
        return attributesRequiredTmp;
    }
    createDeck(){
        for (let i=0; i<12; i++){
            const rand = this.getRandCard();
            this.outputCards.push(this.remainingCards[rand]);
            this.remainingCards.splice(rand,1);
        }
    }
    getRandCard(){
        const random = Math.floor(Math.random() * this.remainingCards.length);
        return random;
    }
    /**
     * 
     * @param nbAttributes : attributes of the card, by default = 4 
     * @returns all cards: 81 in case of 4 attributes and 1224
     */
    createCards(attributes,nbAttributes){
        let tabOfAllCards=[];

        for (let c=0; c<this.lower(attributes[0].length,nbAttributes)-1; c++){
            for (let n=0; n<this.lower(attributes[1].length,nbAttributes)-1; n++){
                for (let s=0; s<this.lower(attributes[2].length,nbAttributes)-1; s++){
                    for (let f=0; f<this.lower(attributes[3].length,nbAttributes)-1; f++){
                        for (let o=0; o<this.lower(attributes[4].length,nbAttributes)-1; o++){
                            tabOfAllCards.push(new Card(attributes[0][c],attributes[1][n],attributes[2][s],attributes[3][f],attributes[4][o]));
                        }
                    }
                }
            }
        }
        return tabOfAllCards;
    }
    lower(length,nbAttributes){
        return nbAttributes<length?nbAttributes:length;
    }
    checkSet(selectedCards){
        if(true){//isSet(selectedCards)){
            selectedCards.forEach(e => {
                this.removeFromRemainingCards(e);
            });
        }
    }
    removeFromRemainingCards(selectedCards){//better check of card type more opti
        let set=[];
        for(let i=0; i<this.allCards.length;i++){
            let e = this.allCards[i]
            if(e.equals(selectedCards)){
                set.push(e);
                this.allCards.splice(i,1);
                console.log("card remove : "+e.color,e.number,e.filling,e.shape);
            }
        }
        if(set.length!=1){
            throw new UnFoundCardException(selectedCards);
        }
        else{
            this.setMade.push(set);
        }
    }
}