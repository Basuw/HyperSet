// import('.Card');

class Card5 extends Card {
    constructor(color, number, shape, filling, outline){
        super(color,number,shape,filling);
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
}
// export {Card5};