import {put, takeEvery} from "redux-saga/effects"
import { GET_NEW_PLANTS_REQUEST, GET_NEW_PLANTS_SUCCESS } from "./newPlants.types"
import { Plant } from "../../types/Plant";

async function fetchNewArrivals(){
    return await fetch("http://10.0.2.2:3000/new-arrivals").then(res => res.json())
}
function *watchGetNewPlants(action:any){
    try{
        const plants:Plant[] = yield fetchNewArrivals();
        yield put({type:GET_NEW_PLANTS_SUCCESS,payload:plants});
    }
    catch(err){
        console.log("Error while fetching new arrivals:", err);
    }
}

function* newArrivalsSaga(){
    yield takeEvery(GET_NEW_PLANTS_REQUEST, watchGetNewPlants);
}

export default newArrivalsSaga;