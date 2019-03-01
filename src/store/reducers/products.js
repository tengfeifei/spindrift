export var products =(prevState=[],action)=>{
 
    let {type,payload}=action;

    switch(type){
        case "products":

        return payload;
        default:
        return prevState

    }
    
}