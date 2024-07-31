import { actionType, stateType } from "../redux.types";
import { GET_POPULAR_PLANTS_SUCCESS } from "./popularPlants.types";

const INITIAL_STATE: stateType= {
    plants: []
}

const reducer = (state = INITIAL_STATE, action:actionType):stateType =>{
    switch(action.type){
        case GET_POPULAR_PLANTS_SUCCESS: {
            return {
                ...state,
                plants:action.payload
            }
        }
        default:
            return state;
    }
}   


export default reducer;