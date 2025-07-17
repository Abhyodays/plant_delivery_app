import { GET_ALL_ORDERS_FAILURE, GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS } from './orderList.action'
interface OrderListState {
  loading: boolean;
  orders: any[];
  error: string | null;
}

const initialState: OrderListState = {
  loading: false,
  orders: [],
  error: null,
};

const orderListReducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_ALL_ORDERS_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_ALL_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload };

    case GET_ALL_ORDERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default orderListReducer;