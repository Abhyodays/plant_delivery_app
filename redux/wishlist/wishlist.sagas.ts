import {call, put, takeEvery} from 'redux-saga/effects'
import { GET_WISHLIST_PLANTS_REQUEST, GET_WISHLIST_PLANTS_SUCCESS, REMOVE_WISHLIST_PLANT_REQUEST, REMOVE_WISHLIST_PLANT_SUCCESS, SET_WISHLIST_PLANTS_REQUEST, SET_WISHLIST_PLANTS_SUCCESS } from './wishlist.types'
import { Plant } from '../../types/Plant';
import AsyncStorage from '@react-native-async-storage/async-storage';


async function getWishlistPlantsFromStorage(){
    try {
        const plants = await AsyncStorage.getItem('wishlist-plants');
        return plants != null ? JSON.parse(plants) : [];
      } catch (err) {
        console.log("Error in fetching data from async storage:",err);
      }
}


async function setWishListPlantInStorage(plant:Plant){
    try{
        let plants:Plant[] = await getWishlistPlantsFromStorage();
        let existingPlant = plants.find(p=> p.id === plant.id);
        if(existingPlant) return plants;
        plants = [...plants, plant];
        await AsyncStorage.setItem('wishlist-plants',JSON.stringify(plants));
        return plants;
    }
    catch(err){
        console.log("Error in adding plant in wishlist:",err);
    }

}

async function removeWishlistPlantFromStorage(id:string){
    try{
        let plants:Plant[] = await getWishlistPlantsFromStorage();
        plants = plants.filter(p => p.id !== id);
        await AsyncStorage.setItem('wishlist-plants',JSON.stringify(plants));
        return plants
    }
    catch(err){
        console.log("Error while removing plant from async storage:", err);
    }
}

function* watchGetWishlistPlants(){
    const plants:Plant[] = yield call(getWishlistPlantsFromStorage);
    yield put ({type: GET_WISHLIST_PLANTS_SUCCESS, payload:plants});
}

function* watchSetWishlistPlants(action:{type:string,payload:Plant}){
    const plants:Plant[] = yield call(setWishListPlantInStorage,action.payload);
    yield put ({type:SET_WISHLIST_PLANTS_SUCCESS, payload: plants});
}

function* watchRemoveWishlistPlant(action:{type:string, payload:string}){
    const plants:Plant[] = yield call(removeWishlistPlantFromStorage,action.payload);
    yield put({type:REMOVE_WISHLIST_PLANT_SUCCESS,payload: plants});
}

function* wishlistSaga(){
    yield takeEvery(GET_WISHLIST_PLANTS_REQUEST, watchGetWishlistPlants);
    yield takeEvery(SET_WISHLIST_PLANTS_REQUEST, watchSetWishlistPlants);
    yield takeEvery(REMOVE_WISHLIST_PLANT_REQUEST, watchRemoveWishlistPlant);
}

export default wishlistSaga;