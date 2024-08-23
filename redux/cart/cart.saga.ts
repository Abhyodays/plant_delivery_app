import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_CART_ITEM_REQUEST, ADD_CART_ITEM_SUCCESS, GET_CART_ALL_ITEMS_REQUEST, GET_CART_ALL_ITEMS_SUCCESS, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS } from "./cart.types";
import { CartItem } from "../../types/CartItem";
import { Plant } from "../../types/Plant";
import {v4 as uuid} from 'uuid';

async function removeCartItem(id:string){
    return fetch(`${process.env.BASE_URL}/cart/hi/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json());
}
 async function addCartItem(item:Plant){
    const newItem:CartItem = {
        id: uuid(),
        item
    };
    return fetch(`${process.env.BASE_URL}/cart/hi`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(newItem)
    })
}
async function getAllCartItem(){
    return fetch(`${process.env.BASE_URL}/cart/hi`).then(res => res.json());
}

function* watchRemoveCartItem(action:any){
    try{
        yield call(removeCartItem, action.payload);
        const plants:Plant[] = yield call(getAllCartItem);
        yield put({type:REMOVE_CART_ITEM_SUCCESS, payload:plants})
    }
    catch(err){
        console.log("Error occured in removing item from cart:", err);
    }
}
function* watchAddCartItem(action:any){
    try{
        yield call(addCartItem, action.payload)
        const plants: Plant[] = yield call(getAllCartItem);
        yield put({type: ADD_CART_ITEM_SUCCESS, payload: plants});
    }
    catch(err){
        console.log("Error in adding item in cart:", err);
    }
}
function* watchGetAllCartItems(action:any){
    try{
    const items:CartItem[] = yield call(getAllCartItem);
    yield put({type:GET_CART_ALL_ITEMS_SUCCESS, payload:items});
    }
    catch(err){
        console.log("Error in fetching all cart items:", err);
    }

}
function* cartSaga(){
    yield takeEvery(GET_CART_ALL_ITEMS_REQUEST, watchGetAllCartItems);
    yield takeEvery(ADD_CART_ITEM_REQUEST, watchAddCartItem);
    yield takeEvery(REMOVE_CART_ITEM_REQUEST, watchRemoveCartItem)
}

export default cartSaga;