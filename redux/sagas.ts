import { AllEffect, ForkEffect, all, fork } from "redux-saga/effects";
import popularPlantsSaga from "./popularPlants/popularPlants.sagas";
import newArrivalsSaga from "./newPlants/newPlants.sagas";
import plantsSaga from "./plants/plants.saga";
import wishlistSaga from "./wishlist/wishlist.sagas";
import cartSaga from "./cart/cart.saga";
import userSaga from "./user/user.saga";
import orderCreateSaga from "./orderCreate/orderCreate.saga";
import orderListSaga from "./orderList/orderList.saga";

export default function* rootSaga(): Generator<AllEffect<ForkEffect<any>>, void, unknown> {
  yield all([
    fork(popularPlantsSaga),
    fork(newArrivalsSaga),
    fork(plantsSaga),
    fork(wishlistSaga),
    fork(cartSaga),
    fork(userSaga),
    fork(orderCreateSaga),
    fork(orderListSaga)
  ]);
}