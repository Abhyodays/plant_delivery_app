import { Plant } from "../../types/Plant"
import { actionType, stateType } from "../redux.types"
import { GET_PLANTS_SUCCESS } from "./plants.types"


const INITIALSTATE:stateType = {
    plants: []
}

const reducer = (state = INITIALSTATE, action:actionType):stateType =>{
    switch(action.type){
        case GET_PLANTS_SUCCESS : 
        return {
            ...state,
            plants: action.payload
        }
        // case GET_PLANTS_FAILURE : 
        // return {
        //     ...state,
        //     plants: [] as Plant[],
        //     error : action.payload as string
        // }

        default :
            return state;
    }
}

export default reducer;