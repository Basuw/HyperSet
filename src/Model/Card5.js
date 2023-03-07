// import('.Card');

class Card5 extends Card {
    constructor(color, number, shape, filling, outline){
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
        if(outline==''){
            throw new EmptyParamaterException('Outline');
        }
        this.color=color;
        this.number=number;
        this.shape=shape;
        this.filling=filling;
        this.outline=outline;
    }
    /**
        * @returns array of all attributes : 
        idx 1 : color
        idx 2 : number 
        idx 3 : shape
        idx 4 : filling
        idx 5 : outline
        * @author Bastien Jacquelin
    */
    getAttributes(){
        return [this.color,this.number,this.shape,this.filling,this.outline];
    }
    equals(card){
        return this.color===card.color && this.number===card.number && this.shape===card.shape && this.filling===card.filling && this.outline===card.outline ;
    }
}
// export {Card5};