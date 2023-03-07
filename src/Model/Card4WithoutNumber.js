class Card4WithoutNumber extends Card{
    constructor(color, shape, filling, outline){
        super();
        if(color==''){
            throw new EmptyParamaterException('Color');
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
        this.color=color;
        this.shape=shape;
        this.filling=filling;
        this.outline=outline;
    }
    getAttributes(){
        return [this.color,this.shape,this.filling,this.outline];
    }
    equals(card){
        return this.color===card.color && this.shape===card.shape && this.filling===card.filling && this.outline===card.outline ;
    }
}