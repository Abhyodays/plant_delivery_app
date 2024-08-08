import { retry } from "redux-saga/effects"
import { User } from "../../types/User"
import { GET_USER_SUCCESS, REMOVE_USER_SUCCESS, SAVE_USER_SUCCESS } from "./user.type"
import { ADD_CART_ITEM_SUCCESS } from "../cart/cart.types"

type stateType = {
    user:User|null
}
const INITIAL_STATE:stateType = {
    user:null
}

const reducer = (state = INITIAL_STATE, action:any):stateType=>{
    switch(action.type){
        case SAVE_USER_SUCCESS:{
            return {
                ...state,
                user: action.payload
            }
        }
        case GET_USER_SUCCESS:{
            return{ 
                ...state, 
                user:action.payload
            }
        }
        case REMOVE_USER_SUCCESS:{
            return {
                ...state,
                user:null
            }
        }
        
        default:
            return state;
    }
}

export default reducer;