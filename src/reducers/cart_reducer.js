import _ from 'lodash';
import { CartTypes } from '../actions/cart';
import { createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  cart: []
}

const addProductToCart = (state = INITIAL_STATE, action) => {
  let cartLength = state.cart.length;
  return { ...state, cart: [
      ...state.cart, state.cart[cartLength] = action.payload
    ]
  }
}

const deleteProductFromCart = (state = INITIAL_STATE, action) => {
  let cart = _.filter(state.cart, (product, index) => index !== action.payload )
  return { ...state,
    cart
  }
}

const HANDLERS = {
  [CartTypes.ADD_PRODUCT_TO_CART]: addProductToCart,
  [CartTypes.DELETE_PRODUCT_FROM_CART]: deleteProductFromCart
}

export default createReducer(INITIAL_STATE, HANDLERS);