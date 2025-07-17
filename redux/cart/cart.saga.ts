import { call, put, takeEvery } from "redux-saga/effects";
import {
  ADD_CART_ITEM_REQUEST,
  ADD_CART_ITEM_SUCCESS,
  GET_CART_ALL_ITEMS_REQUEST,
  GET_CART_ALL_ITEMS_SUCCESS,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
} from "./cart.types";
import { CartItem } from "../../types/CartItem";
import { Plant } from "../../types/Plant";
import { v4 as uuid } from "uuid";

// 👇 API Calls
async function removeCartItem(userId: string, id: string) {
  const response = await fetch(`${process.env.BASE_URL}/cart/${userId}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

async function addCartItem(userId: string, item: Plant) {
  const newItem: CartItem = {
    id: uuid(),
    item,
  };

  const response = await fetch(`${process.env.BASE_URL}/cart/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });

  return await response.json();
}

async function getAllCartItems(userId: string) {
  const response = await fetch(`${process.env.BASE_URL}/cart/${userId}`);
  return await response.json();
}

// 👇 Sagas
function* watchRemoveCartItem(action: any): any {
  try {
    const { userId, id } = action.payload;
    yield call(removeCartItem, userId, id);
    const items: CartItem[] = yield call(getAllCartItems, userId);
    yield put({ type: REMOVE_CART_ITEM_SUCCESS, payload: items });
  } catch (err) {
    console.log("Error occurred in removing item from cart:", err);
  }
}

function* watchAddCartItem(action: any): any {
  try {
    const { userId, item } = action.payload;
    yield call(addCartItem, userId, item);
    const items: CartItem[] = yield call(getAllCartItems, userId);
    yield put({ type: ADD_CART_ITEM_SUCCESS, payload: items });
  } catch (err) {
    console.log("Error in adding item to cart:", err);
  }
}

function* watchGetAllCartItems(action: any): any {
  try {
    const { userId } = action.payload;
    const items: CartItem[] = yield call(getAllCartItems, userId);
    yield put({ type: GET_CART_ALL_ITEMS_SUCCESS, payload: items });
  } catch (err) {
    console.log("Error in fetching all cart items:", err);
  }
}

// 👇 Watcher
function* cartSaga() {
  yield takeEvery(GET_CART_ALL_ITEMS_REQUEST, watchGetAllCartItems);
  yield takeEvery(ADD_CART_ITEM_REQUEST, watchAddCartItem);
  yield takeEvery(REMOVE_CART_ITEM_REQUEST, watchRemoveCartItem);
}

export default cartSaga;
