import { ProductActionTypes } from '../actions/product';
import { createReducer } from 'reduxsauce';
import dotProp from 'dot-prop-immutable';

const INITIAL_STATE = {
  products: []
}

const getProducts = (state = INITIAL_STATE, action) => {
  let newState = dotProp.set(state, `products`, action.payload)
  newState.products = newState.products.products;
  return newState;
  // return {...state, products: [
  //   ...state.products, state.products = products
  // ]}
}

const HANDLERS = {
  [ProductActionTypes.GET_PRODUCTS]: getProducts
}

export default createReducer(INITIAL_STATE, HANDLERS);