class Card4WithoutColor extends Card{
    constructor(number, shape, filling, outline){
        super();
        if(number==''){
            throw new EmptyParamaterException('Number');
        }
        if(shape==''){
            throw new EmptyParamaterException('Shape');
        }
        if(filling==''){
            throw new EmptyParamaterException('Filling');
        }
        if(outline==''){
            throw new EmptyParamaterException('Outline');
        }
        this.number=number;
        this.shape=shape;
        this.filling=filling;
        this.outline=outline;
    }
    getAttributes(){
        return [this.number,this.shape,this.filling,this.outline];
    }
    equals(card){
        return this.number===card.number && this.shape===card.shape && this.filling===card.filling && this.outline===card.outline ;
    }
}