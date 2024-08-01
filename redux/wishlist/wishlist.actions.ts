import { Plant } from "../../types/Plant"
import { actionType } from "../redux.types"
import { GET_WISHLIST_PLANTS_REQUEST, SET_WISHLIST_PLANTS_REQUEST } from "./wishlist.types"

export const getWishlistPlants = ()=>{
    return {
        type: GET_WISHLIST_PLANTS_REQUEST
    }
}

export const setWishListPlant = (plant:Plant) =>{
    return {
        type: SET_WISHLIST_PLANTS_REQUEST,
        payload: plant
    }
}