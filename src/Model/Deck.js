class Deck{
    /**
     * 
     * @param {*} attributes : array with the attributes index for the cards
     * @author Bastien Jacquelin
     */
    constructor(attributes,nbCards){
        //console.log(attributes);
        this.allCards=this.createCards(attributes);// All the cards in the game
        this.remainingCards=[]
        this.nbCards=nbCards;
        this.remainingCards=this.remainingCards.concat(this.allCards);// cards in the stack
        this.outputCards=[];// 12 cards lay on the table 
        this.setMade=[];// array with all the set already mades (array of set)
        this.createDeck(12);
    }
    /**
     * @brief creation of the deck : 12 cards lay in front of the player
     * @author Bastien Jacquelin
     */
    createDeck(nbCards){
        for (let i=0; i<nbCards; i++){
            const rand = this.getRandCard();
            this.outputCards.push(this.remainingCards[rand]);
            this.remainingCards.splice(rand,1);
        }
    }
    /**
     * 
     * @returns random number in range of the array size 
     * @author Bastien Jacquelin
     */
    getRandCard(){
        const random = Math.floor(Math.random() * this.remainingCards.length);
        return random;
    }
    /**
     * 
     * @param attributes : index of the attributes used
     * @returns all cards: 81 in case of 4 attributes and 1024 if 5 attributes
     * @author Bastien Jacquelin
     */
    createCards(attributes){
        let factory = new Factory(attributes)
        return factory.product
    }
    /**
     * @brief verification of the validity of the set selected
     * @param {*} selectedCards array of cards : set 
     * @author Bastien Jacquelin
     */
    checkSet(selectedCards){
        if(true){//isSet(selectedCards)){
            this.removeFromoutputCards(selectedCards);
        }
    }
    /**
     * @brief when a set is made, need to remove the card from the array remainingCards
     * @param {*} selectedCards cards which need to be removed from the outputcards
     * @author Bastien Jacquelin
     */
    removeFromoutputCards(selectedCards){//better check of card type more opti
        let set=[];
        selectedCards.forEach(element => {
            for(let i=0; i<this.outputCards.length;i++){
                let e = this.outputCards[i]
                if(e.equals(element)){
                    set.push(e);
                    this.outputCards.splice(i,1);
                }
            }
        });

        if(set.length<1){
            throw new UnFoundCardException(selectedCards);
        }
        else{
            this.setMade.push(set);
            this.createDeck(this.nbCards)
        }
    }
}