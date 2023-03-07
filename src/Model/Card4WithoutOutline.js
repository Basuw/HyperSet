class Card4WithoutOutline extends Card{
    constructor(color, number, shape, filling){
        super();
        if(color==''){
            throw new EmptyParamaterException('Color');
        }
        if(number==''){
            throw new EmptyParamaterException('Number');
        }
        if(shape==''){
            throw new EmptyParamaterException('Shape');
        }
        if(filling==''){
            throw new EmptyParamaterException('Filling');
        }
        this.color=color;
        this.number=number;
        this.shape=shape;
        this.filling=filling;
    }
    getAttributes(){
        return [this.color,this.number,this.shape,this.filling];
    }
    equals(card){
        return this.number===card.number && this.shape===card.shape && this.filling===card.filling && this.color===card.color;
    }
}