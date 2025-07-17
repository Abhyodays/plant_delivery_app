import {call, put, takeEvery} from 'redux-saga/effects'
import { GET_POPULAR_PLANTS_REQUEST, GET_POPULAR_PLANTS_SUCCESS } from './popularPlants.types'
import { Plant } from '../../types/Plant';

function fetchPopularPlants() {
    const response =  fetch(`${process.env.BASE_URL}/popular-plants`).then(res => res.json());
    return response
}
function* workerGetPopularPlants(){
    try{  
    const plants:Plant[] = yield call(fetchPopularPlants);
    yield put({type:GET_POPULAR_PLANTS_SUCCESS, payload:plants});
    }
    catch(error){
        console.log(error)
    }
}
function* popularPlantsSaga(){
    yield takeEvery(GET_POPULAR_PLANTS_REQUEST, workerGetPopularPlants);
}

export default popularPlantsSaga;