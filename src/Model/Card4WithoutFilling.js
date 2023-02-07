class Card4WithoutFilling extends Card{
    constructor(color,number, shape, outline){
        super();
        if(number==''){
            throw new EmptyParamaterException('Number');
        }
        if(shape==''){
            throw new EmptyParamaterException('Shape');
        }
        if(color==''){
            throw new EmptyParamaterException('Color');
        }
        if(outline==''){
            throw new EmptyParamaterException('Outline');
        }
        this.number=number;
        this.shape=shape;
        this.color=color;
        this.outline=outline;
    }
    getAttributes(){
        return [this.number,this.shape,this.color,this.outline];
    }
    equals(card){
        return this.number===card.number && this.shape===card.shape && this.color===card.color && this.outline===card.outline ;
    }
}