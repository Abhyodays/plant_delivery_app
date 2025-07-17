import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_ORDERS_FAILURE, GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS } from "./orderList.action";

const getAllOrdersApi = async (userId: string) => {
  const response = await fetch(`${process.env.BASE_URL}/order/${userId}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch orders');
  }

  const result = await response.json();
  return result.orders; // based on your Express response shape
};

function* orderListWorker(action: { type: string; payload: string }) {
  try {
    const orders = yield call(getAllOrdersApi, action.payload);
    yield put({ type: GET_ALL_ORDERS_SUCCESS, payload: orders });
  } catch (error: any) {
    yield put({ type: GET_ALL_ORDERS_FAILURE, payload: error.message });
  }
}

export default function* orderListSaga() {
  yield takeLatest(GET_ALL_ORDERS_REQUEST, orderListWorker);
}