import { createActions } from 'reduxsauce';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const addProductToCart = (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: null
  });
}

export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
export const deleteProductFromCart = () => {
  dispatch({
    type: DELETE_PRODUCT_FROM_CART,
    payload: null
  });
}

const { Types, Creators } = createActions({
  addProductToCart,
  deleteProductFromCart
})

export const CartTypes = Types;
export default Creators;