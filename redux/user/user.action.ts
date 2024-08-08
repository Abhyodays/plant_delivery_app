import { User } from "../../types/User";
import { GET_USER_REQUEST, REMOVE_USER_REQUEST, REMOVE_USER_SUCCESS, SAVE_USER_REQUEST } from "./user.type";

export const saveUser = (user:User) => {
    return {
        type: SAVE_USER_REQUEST,
        payload: user
    }
}

export const getUserFromStorage = ()=>{
    return {
        type:GET_USER_REQUEST
    }
}

export const removeUserRequest = ()=>{
    return {
        type: REMOVE_USER_REQUEST
    }
}

export const removeUserSuccess = ()=>{
    return {
        type: REMOVE_USER_SUCCESS
    }
}