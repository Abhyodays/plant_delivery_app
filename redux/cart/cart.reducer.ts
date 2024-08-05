import { CartItem } from "../../types/CartItem"
import { ADD_CART_ITEM_SUCCESS, GET_CART_ALL_ITEMS_SUCCESS, REMOVE_CART_ITEM_SUCCESS } from "./cart.types"

type stateType = {
    items: CartItem[]
}
const INITIAL_STATE = {
    items:[]
}

const reducer = (state = INITIAL_STATE, action:{type:string, payload:any}):stateType =>{
    switch(action.type){
        case GET_CART_ALL_ITEMS_SUCCESS:{
            return {
                ...state,
                items: action.payload
            }
        }
        case ADD_CART_ITEM_SUCCESS:{
            return {
                ...state,
                items: action.payload
            }
        }
        case REMOVE_CART_ITEM_SUCCESS:{
            return {
                ...state,
                items: action.payload
            }
        }
        default:
            return state;
    }

}
export default reducer;