import { ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS } from "./orderCreate.action";

interface OrderCreateState {
  loading: boolean;
  order: any | null;
  error: string | null;
}

const initialState: OrderCreateState = {
  loading: false,
  order: null,
  error: null,
};

const orderCreateReducer = (
  state = initialState,
  action: any
): OrderCreateState => {
  switch (action.type) {
    case ORDER_REQUEST:
      return { ...state, loading: true, error: null };

    case ORDER_SUCCESS:
      return { ...state, loading: false, order: action.payload };

    case ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default orderCreateReducer;