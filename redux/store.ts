import plantsReducer from './plants/plants.reducers';
import {combineReducers, createStore} from 'redux'
import popularPlantsReducer from './popularPlants/popularPlants.reducers'
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import popularPlantsSaga from './popularPlants/popularPlants.sagas';
import newArrivalsSaga from './newPlants/newPlants.sagas';
import newArrivalsReducer from './newPlants/newPlants.reducers'
import plantsSaga from './plants/plants.saga';
import wishlistReducer from './wishlist/wishlist.reducer'
import wishlistSaga from './wishlist/wishlist.sagas';
import cartRreducer from './cart/cart.reducer';
import cartSaga from './cart/cart.saga';
import userReducer from './user/user.reducer'
import userSaga from './user/user.saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    plants: plantsReducer,
    popularPlants: popularPlantsReducer,
    newPlants: newArrivalsReducer,
    wishlist:wishlistReducer,
    cart: cartRreducer,
    user:userReducer
})
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(popularPlantsSaga);
sagaMiddleware.run(newArrivalsSaga);
sagaMiddleware.run(plantsSaga);
sagaMiddleware.run(wishlistSaga);
sagaMiddleware.run(cartSaga);
sagaMiddleware.run(userSaga);



export type RootState = typeof store;
export default store;
