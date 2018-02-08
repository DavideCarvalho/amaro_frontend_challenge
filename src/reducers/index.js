import { combineReducers } from 'redux';
import cartReducer from './cart_reducer'
import productReducer from './product_reducer';

const rootReducer = combineReducers({
    carrinho: cartReducer,
    products: productReducer
});

export default rootReducer;