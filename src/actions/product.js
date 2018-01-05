import { createActions } from 'reduxsauce';

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const getProducts = (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
    payload: null
  });
}

const { Types, Creators } = createActions({
  getProducts
})

export const ProductTypes = Types;
export default Creators;