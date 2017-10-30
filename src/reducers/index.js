import { combineReducers } from 'redux';
import reducerCarrinho from './reducer_carrinho'

const rootReducer = combineReducers({
    carrinho: reducerCarrinho
});

export default rootReducer;