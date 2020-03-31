import {
  SET_LOADING,
  ADD_STOCK,
  CLEAR_RESULTS,
  EDIT_TOGGLE,
  DELETE_STOCK,
  CHANGE_TOGGLE,
  SHOW_HEADER,
  SET_TEXT,
  SEARCH_STOCKS,
  UPDATE_STOCKS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_STOCK:
      return {
        ...state,
        stocks: [...state.stocks, action.payload]
      };
    case CLEAR_RESULTS:
      return {
        ...state,
        searchResults: null
      }
    case CHANGE_TOGGLE:
      return {
        ...state,
        changeBool: !state.changeBool
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
    case SEARCH_STOCKS:
      return {
        ...state,
        searchResults: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_TEXT:
      return {
        ...state,
        stateText: action.payload
      }
    case SHOW_HEADER:
      return {
        ...state,
        showHeaderNavbar: action.payload
      };
    case UPDATE_STOCKS:
      return {
        ...state,
        stocks: action.payload
      }
    default:
      return state;
  }
};
