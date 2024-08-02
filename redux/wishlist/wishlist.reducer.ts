import { actionType, stateType } from "../redux.types";
import { GET_WISHLIST_PLANTS_SUCCESS, REMOVE_WISHLIST_PLANT_SUCCESS, SET_WISHLIST_PLANTS_SUCCESS } from "./wishlist.types";

const INITIAL_STATE:stateType= {
    plants:[]
}

const reducer = (state = INITIAL_STATE, action:actionType):stateType=>{
    switch(action.type){
        case GET_WISHLIST_PLANTS_SUCCESS:
            return {
                ...state,
                plants: action.payload
            }
        case SET_WISHLIST_PLANTS_SUCCESS:
            return {
                ...state,
                plants: action.payload
            }
        case REMOVE_WISHLIST_PLANT_SUCCESS:
            return{
                ...state,
                plants: action.payload
            }
        default:
            return state;
    }

}

export default reducer;