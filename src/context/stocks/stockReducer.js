import { SET_LOADING, ADD_STOCK, EDIT_TOGGLE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_STOCK:
    console.log(action.payload)
      return {
        ...state,
        stocks: [...state.stocks, action.payload]
      };
    case EDIT_TOGGLE:
      return {
          ...state,
          editOpen: !state.editOpen
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
