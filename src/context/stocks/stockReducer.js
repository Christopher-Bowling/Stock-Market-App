import { SET_LOADING, ADD_STOCK, EDIT_TOGGLE, DELETE_STOCK } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_STOCK:
      return {
        ...state,
        stocks: [...state.stocks, action.payload]
      };
    case DELETE_STOCK:
      return {
        ...state,
        stocks: state.stocks.filter(stock => stock.symbol !== action.payload)
      };
    case EDIT_TOGGLE:
      return {
        ...state,
        editOpen: !state.editOpen
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
