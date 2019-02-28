export var products =(prevState=[],action)=>{
 
    let {type,payload}=action;

    switch(type){
        case "products":
        var newlist=[...prevState,...payload]

        return newlist;
        default:
        return prevState

    }
    
}