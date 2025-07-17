import { call, put, takeLatest } from "redux-saga/effects";
import { ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS } from "./orderCreate.action";
import { getAllCartItems } from "../cart/cart.actions";

const placeOrderApi = async (userId: string) => {
  const response = await fetch(`${process.env.BASE_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId}),
  });
  console.log("response:", response)
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to place order');
  }
  return await response.json();
};

function* orderCreateWorker(action: { type: string; payload: string }) {
  try {
    const order = yield call(placeOrderApi, action.payload);
    yield put({ type: ORDER_SUCCESS, payload: order });
    yield put (getAllCartItems(action.payload));
  } catch (error: any) {
    yield put({ type: ORDER_FAILURE, payload: error.message });
  }
}

export default function* orderCreateSaga() {
  yield takeLatest(ORDER_REQUEST, orderCreateWorker);
}