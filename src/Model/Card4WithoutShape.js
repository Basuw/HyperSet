class Card4WithoutShape extends Card{
    constructor(color,number, filling, outline){
        super();
        if(color==''){
            throw new EmptyParamaterException('Color');
        }
        if(number==''){
            throw new EmptyParamaterException('Number');
        }
        if(filling==''){
            throw new EmptyParamaterException('Filling');
        }
        if(outline==''){
            throw new EmptyParamaterException('Outline');
        }
        this.color=color;
        this.number=number;
        this.filling=filling;
        this.outline=outline;
    }
    getAttributes(){
        return [this.number,this.color,this.filling,this.outline];
    }
    equals(card){
        return this.number===card.number && this.color===card.color && this.filling===card.filling && this.outline===card.outline ;
    }
}