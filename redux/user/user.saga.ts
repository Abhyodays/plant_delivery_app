import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USER_REQUEST, GET_USER_SUCCESS, REMOVE_USER_REQUEST, REMOVE_USER_SUCCESS, SAVE_USER_REQUEST, SAVE_USER_SUCCESS} from "./user.type";
import { Credential } from "../../types/Credential";
import { User } from "../../types/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

type actionType = {
    type: string,
    payload:User
}

async function getUser(){
    try {
        const user = await AsyncStorage.getItem('user');
        return user != null ? JSON.parse(user) : null;
      } catch (err) {
        console.log("Error in fetching data from async storage:",err);
      }
}

async function setUser(user:User){
    try{
        await AsyncStorage.setItem('user', JSON.stringify(user));
        return await getUser();
    }
    catch(err){
        console.log(err);
    }
}
function* watchSaveUser(action:actionType){
    try{
        const user:User = yield call(setUser, action.payload);
        yield put({type:SAVE_USER_SUCCESS, payload:user});
    }
    catch(err){
        console.log(err)
    }
}
function *watchGetUser(){
    try{
        const user:User = yield call(getUser);
        yield put({type: GET_USER_SUCCESS, payload:user});
    }
    catch(err){
        console.log("Error in getting user from storage:", err);
    }
}
async function removeUser(){
    try{
        await AsyncStorage.removeItem("user");
    }
    catch(err){
        throw err;
    }
}
function* watchRemoveUser(){
    try{
        yield call(removeUser);
        yield put({type:REMOVE_USER_SUCCESS});
    }
    catch(err){
        console.log("Error in removing user from storage:", err);
    }
}

function* userSaga(){
    yield takeEvery(SAVE_USER_REQUEST, watchSaveUser);
    yield takeEvery(GET_USER_REQUEST,watchGetUser);
    yield takeEvery(REMOVE_USER_REQUEST, watchRemoveUser);
}
export default userSaga;