import { createStore } from 'redux';
import {product} from './../reducers/product';

const initialState = {
  product:{
    name: 'Tomates',
    price: 10,
    quantity: 2,
    total: 20
  }
};

export const store = createStore(product, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
