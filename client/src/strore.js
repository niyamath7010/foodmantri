import {combineReducers} from "redux"

import { createStore , applyMiddleware } from "redux"

import thunk from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension"


import { getAllPizzaReducer } from "./reduce/pizzaReducer"

const finalReducer=combineReducers({
    getAllPizzaReducer:getAllPizzaReducer
})

const inittalState={}

const composeEnhancer=composeWithDevTools({})

const store=createStore(finalReducer, inittalState, composeEnhancer(applyMiddleware(thunk)))

export default store;