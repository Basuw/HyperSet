class Deck {
  /**
   * 
   * @param {*} attributes : array with the attributes index for the cards
   * @author Bastien Jacquelin
   */
  constructor(attributes, nbCards) {
    this.nbCards = nbCards;// number of card to do a set
    this.allCards = this.createCards(attributes);// All the cards in the game
    this.remainingCards = [];//init tab null
    this.remainingCards = this.remainingCards.concat(this.allCards);// cards in the stack, init = all before creation of deck -> remove 
    this.outputCards = [];// 12 cards lay on the table 
    this.setMade = [];// array of array with all the set already mades (array of set)
    this.createDeck(12);
  }
  /**
   * 
   * @param attributes : index of the attributes used
   * @returns all cards: 81 in case of 4 attributes and 1024 if 5 attributes
   * @author Bastien Jacquelin
   */
  createCards(attributes) {//working✅
    let factory = new Factory(attributes, this.nbCards);
    return factory.product;
  }
  /**
   * @brief creation of the deck : 12 random cards lay in front of the playe and remove card from the remainingCard array
   * @author Bastien Jacquelin
   */
  createDeck(nbCards) {//toTest⌛when more than 12c to d't add other cards
    if (this.remainingCards.length < this.nbCards) {// no more cards
      console.log("PLUS DE CARTES");
      return 2;
    }
    else {
        let nbSets = setsCounter(this.outputCards, this.nbCards);
        if(this.outputCards.length>=12 && nbSets!=0){
            return
        }
        else{
            for (let i = 0; i < nbCards; i++) {
                const rand = this.getRandCard();
                this.outputCards.push(this.remainingCards[rand]);
                this.remainingCards.splice(rand, 1);
            }
            nbSets = setsCounter(this.outputCards, this.nbCards);
            console.log("nbSets", nbSets);
            // console.log("outputCards.length", this.outputCards.length);
            // console.log("remainingCards.length", this.remainingCards.length);
            if (nbSets == 0) {
                this.createDeck(this.nbCards)
            }
        }
    }
  }

  /**
   * 
   * @returns random number in range of the array size 
   * @author Bastien Jacquelin
   */
  getRandCard() {//working✅
    const random = Math.floor(Math.random() * this.remainingCards.length);
    return random;
  }

  /**
   * @brief verification of the validity of the set selected, call removeFromoutputCards when set is confirmed
   * @param {*} selectedCards array of cards : set 
   * @author Bastien Jacquelin
   */
  checkSet(selectedCards) {//toTest⌛
    if (isSet(selectedCards)){// is a set
      if (this.outputCards.length == 0) {
        console.log("C'est win")
        return 2;
      }
      else {
        return this.removeFromoutputCards(selectedCards);
      }
    }
    else if (this.remainingCards.length < this.nbCards) {
      console.log("C'est win")
      return 2;
    }
    return 0;
  }

  /**
   * @brief when a set is made, need to remove the card from the array remainingCards
   * @param {*} selectedCards cards which need to be removed from the outputcards
   * @author Bastien Jacquelin
   */
  removeFromoutputCards(selectedCards) {//working✅
    console.log(JSON.parse(JSON.stringify(selectedCards)))
    let set = [];
    selectedCards.forEach(element => {
      for (let i = 0; i < this.outputCards.length; i++) {
        let e = this.outputCards[i]
        if (e.equals(element)) {
          set.push(e);
          this.outputCards.splice(i, 1);
        }
      }
    });
    if (set.length < 1) {
      throw new UnFoundCardException(selectedCards);
    }
    else {
      this.setMade.push(set);
      return this.createDeck(this.nbCards)
    }
  }
}
