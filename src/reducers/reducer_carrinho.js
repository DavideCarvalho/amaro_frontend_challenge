import _ from 'lodash';
const initialState = {
  cart: []
}

export default function (state=initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
    let cartLength = state.cart.length;
    return {...state, cart : [
      ...state.cart, state.cart[cartLength] = action.payload
    ]}
    case 'DELETE_PRODUCT':
    const cart = _.filter(state.cart, (product, index) => {
      index !== action.payload
    })
    return { ...state, cart}
    default:
    return state
  }
}