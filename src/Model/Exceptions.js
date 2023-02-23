class UnFoundCardException extends Error{
    constructor(card){
        super(`Card ${card.color +" "+ card.shape+ " " + card.number +" "+ card.filling} is missing`);
    }
}
class EmptyParamaterException extends Error{
    constructor(field){
        super(`Field ${field} missing`);
    }
}
