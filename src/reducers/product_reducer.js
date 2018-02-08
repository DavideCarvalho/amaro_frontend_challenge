import { ProductTypes } from '../actions/product';
import { createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  products: []
}

const getProducts = (state = INITIAL_STATE, action) => {
  return {...state, products: [
    ...state.products, state.products = action.payload
  ]}
}

const HANDLERS = {
  [ProductTypes.GET_PRODUCTS]: getProducts
}

export default createReducer(INITIAL_STATE, HANDLERS);