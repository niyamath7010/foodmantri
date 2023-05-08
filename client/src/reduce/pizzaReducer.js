export const getAllPizzaReducer=(state={}, action)=>{
    switch(action.type){
        case 'GET_PIZZA_REQUEST' : return{
            ...state
        }
        case 'GET_PIZZA_Sucess': return{
            pizzas:action.payload
        }
        case 'GET_PIZZA_Failed' : return{
            error : action.payload
        }
        default:return state
    }
}