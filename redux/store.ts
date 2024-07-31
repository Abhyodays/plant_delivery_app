import plantsReducer from './plants/plants.reducers';
import {combineReducers, createStore} from 'redux'
import popularPlantsReducer from './popularPlants/popularPlants.reducers'
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import popularPlantsSaga from './popularPlants/popularPlants.sagas';
import newArrivalsSaga from './newPlants/newPlants.sagas';
import newArrivalsReducer from './newPlants/newPlants.reducers'
import plantsSaga from './plants/plants.saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    plants: plantsReducer,
    popularPlants: popularPlantsReducer,
    newPlants: newArrivalsReducer,
})
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(popularPlantsSaga);
sagaMiddleware.run(newArrivalsSaga);
sagaMiddleware.run(plantsSaga);


export type RootState = typeof store;
export default store;
