import { CartItem } from "../../types/CartItem"
import { Plant } from "../../types/Plant"
import { ADD_CART_ITEM_REQUEST,  GET_CART_ALL_ITEMS_REQUEST,  REMOVE_CART_ITEM_REQUEST } from "./cart.types"

export const getAllCartItems = ()=>{
    return {
        type: GET_CART_ALL_ITEMS_REQUEST,
    }
}

export const removeCartItem = (id:string)=>{
    return {
        type: REMOVE_CART_ITEM_REQUEST,
        payload: id
    }
}

export const addItemToCart = (item:Plant) =>{
    return {
        type: ADD_CART_ITEM_REQUEST, 
        payload:item
    }

}