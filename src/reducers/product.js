import { ADD_PRODUCT } from '../actions';

export const product = (state = {}, action) =>{
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, product: action.value }
    default:
      return state;
  }
  return state;
}
