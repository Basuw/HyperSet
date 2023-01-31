class EmptyParamaterException extends Error{
    constructor(field){
        super(`Field ${field} missing`);
    }
}