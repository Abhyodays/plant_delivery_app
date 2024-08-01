import {put, takeEvery} from 'redux-saga/effects';
import { GET_PLANTS_REQUEST, GET_PLANTS_SUCCESS } from './plants.types';
import { Plant } from '../../types/Plant';

async function fetchPlants(){
    return fetch("http://10.0.2.2:3000/").then(res=> res.json())
}
function* watchGetPlants(){
    try{
        const plants:Plant[] = yield fetchPlants();
        yield put({type:GET_PLANTS_SUCCESS, payload:plants})
    }
    catch(err){
        console.error("Error in fetching plant:", err);
    }
}
function* plantsSaga(){
    yield takeEvery(GET_PLANTS_REQUEST, watchGetPlants);
}

export default plantsSaga;