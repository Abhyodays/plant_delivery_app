// Action Types
const ORDER_REQUEST = "Order_Request";
const ORDER_SUCCESS = "Order_Success";
const ORDER_FAILURE = "Order_Failure";


// Action Creators
const orderRequest = (userId: string) => ({
  type: ORDER_REQUEST,
  payload: userId,
});

const orderSuccess = (orderData: any) => ({
  type: ORDER_SUCCESS,
  payload: orderData,
});

const orderFailure = (error: string) => ({
  type: ORDER_FAILURE,
  payload: error,
});

export {ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE,orderRequest, orderFailure, orderSuccess}