import { CartItem } from "../../types/CartItem"
import { Plant } from "../../types/Plant"
import { ADD_CART_ITEM_REQUEST,  GET_CART_ALL_ITEMS_REQUEST,  REMOVE_CART_ITEM_REQUEST } from "./cart.types"

export const getAllCartItems = (userId:string)=>{
    return {
        type: GET_CART_ALL_ITEMS_REQUEST,
        payload:{userId}
    }
}

export const removeCartItem = (userId:string, id:string)=>{
    return {
        type: REMOVE_CART_ITEM_REQUEST,
        payload: {userId, id}
    }
}

export const addItemToCart = (userId:string, item:Plant) =>{
    return {
        type: ADD_CART_ITEM_REQUEST, 
        payload:{userId, item}
    }

}