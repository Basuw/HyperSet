class Deck{
    /**
     * 
     * @param {*} attributes : array with the attributes index for the cards
     */
    constructor(attributes){
        console.log(attributes);
        this.allCards=this.createCards(attributes);// All the cards in the game
        this.remainingCards=this.allCards;// cards in the stack
        this.outputCards=[];// 12 cards lay on the table 
        this.setMade=[];// array with all the set already mades (array of set)
        this.createDeck();
    }
    /**
     * @brief creation of the deck : call factory to create the good cards
     */
    createDeck(){
        for (let i=0; i<12; i++){
            const rand = this.getRandCard();
            this.outputCards.push(this.remainingCards[rand]);
            this.remainingCards.splice(rand,1);
        }
    }
    /**
     * 
     * @returns random number in range of the array size 
     */
    getRandCard(){
        const random = Math.floor(Math.random() * this.remainingCards.length);
        return random;
    }
    /**
     * 
     * @param attributes : index of the attributes used
     * @returns all cards: 81 in case of 4 attributes and 1024 if 5 attributes
     */
    createCards(attributes){
        let factory = new Factory(attributes)
        return factory.product
    }
    checkSet(selectedCards){
        if(true){//isSet(selectedCards)){
            selectedCards.forEach(e => {
                this.removeFromRemainingCards(e);
            });
        }
    }
    /**
     * 
     * @param {*} selectedCards wehn a set is made, need to remove the card from the array remainingCards
     */
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