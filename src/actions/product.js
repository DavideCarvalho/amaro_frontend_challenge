import { createActions } from 'reduxsauce';
import jsonData from '../products.json';

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const getProducts = () => (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
    payload: jsonData
  });
}

const { Types, Creators } = createActions({
  getProducts
})

export const ProductActionTypes = Types;
export default Creators;