import plantsReducer from './plants/plants.reducers';
import {combineReducers, createStore} from 'redux'
import popularPlantsReducer from './popularPlants/popularPlants.reducers'
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import newArrivalsReducer from './newPlants/newPlants.reducers'
import wishlistReducer from './wishlist/wishlist.reducer'
import cartRreducer from './cart/cart.reducer';
import userReducer from './user/user.reducer'
import rootSaga from './sagas';
import orderCreateReducer from './orderCreate/orderCreate.reducer';
import orderListReducer from './orderList/orderList.reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    plants: plantsReducer,
    popularPlants: popularPlantsReducer,
    newPlants: newArrivalsReducer,
    wishlist:wishlistReducer,
    cart: cartRreducer,
    user:userReducer,
    orderCreate: orderCreateReducer,
    orderList: orderListReducer
})
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)


export type RootState = typeof store;
export default store;
