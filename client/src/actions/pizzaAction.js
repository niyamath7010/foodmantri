import axios from "axios"

export const getAllPizza=()=>async dispatch=>{

    dispatch({type:'GET_PIZZA_REQUEST'})

    try{
        const response=await axios.get('/api/pizzas/getallpizzas')
        console.log(response)
        dispatch({type:'GET_PIZZA_Sucess', payload: response.data})
    }catch(error){
        dispatch({type:'GET_PIZZA_Failed' , payload : error})
    }

}