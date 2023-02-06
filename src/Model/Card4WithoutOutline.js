class Card4WithoutOutline extends Card{
    constructor(color, number, shape, filling){
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
        if(color==''){
            throw new EmptyParamaterException('Color');
        }
        this.number=number;
        this.shape=shape;
        this.filling=filling;
        this.color=color;
    }
    getAttributes(){
        return [this.number,this.shape,this.filling,this.color];
    }
    equals(card){
        return this.number===card.number && this.shape===card.shape && this.filling===card.filling && this.color===card.color;
    }
}