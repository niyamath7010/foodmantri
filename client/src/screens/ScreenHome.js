import React, { useEffect } from 'react'
import "./screen.css"
import { useDispatch } from 'react-redux'
import Pizzas from '../PizzaData'
import Pizza from '../component/Pizza'
import { getAllPizza } from '../actions/pizzaAction'
export const ScreenHome = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllPizza)
    },[])
  return (
    <div className='containerMain'>
        <div className='row'>
            {Pizzas.map((pizzu)=>{
                return(
                    <div className='col-md-4 p-1'>
                        <div className='m-3'>
                            <Pizza pizzu={pizzu} />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
