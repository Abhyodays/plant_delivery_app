const GET_ALL_ORDERS_REQUEST = "Get_All_Orders_Request";
const GET_ALL_ORDERS_SUCCESS = "Get_All_Orders_Success";
const GET_ALL_ORDERS_FAILURE = "Get_All_Orders_Failure";


const getAllOrdersRequest = (userId:string) => ({
  type: GET_ALL_ORDERS_REQUEST,
  payload: userId
});


const getAllOrdersSuccess = (orders: any[]) => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload: orders,
});

const getAllOrdersFailure = (error: string) => ({
  type: GET_ALL_ORDERS_FAILURE,
  payload: error,
});

export {GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS, GET_ALL_ORDERS_FAILURE, getAllOrdersRequest, getAllOrdersSuccess, getAllOrdersFailure}
