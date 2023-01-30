class Card{
    constructor(color, number, shape, filling){
        this.color=color;
        this.number=number;
        this.shape=shape;
        this.filling=filling;
    }
    /**
     * @returns array of all attributes : 
        idx 1 : color
        idx 2 : number 
        idx 3 : shape
        idx 4 : filling
        idx 5 : null
        * @author Bastien Jacquelin
     */
    getAttributes(){
        return [this.color,this.number,this.shape,this.filling,null];
    }
    
}//export {Card}