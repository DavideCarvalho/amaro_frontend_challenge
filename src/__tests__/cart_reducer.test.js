import carrinhoReducer from '../reducers/cart_reducer'
import products from '../../products.json';

let cartWithOneProduct = null;
let cartWithTwoProducts = null;

beforeEach(() => {
  cartWithOneProduct = {
    cart: [
      {
        "name": "VESTIDO TRANSPASSE BOW",
        "style": "20002605",
        "code_color": "20002605_613",
        "color_slug": "tapecaria",
        "color": "TAPE�ARIA",
        "on_sale": false,
        "regular_price": "R$ 199,90",
        "actual_price": "R$ 199,90",
        "discount_percentage": "",
        "installments": "3x R$ 66,63",
        "image": "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",
        "sizes": [
          {
            "available": false,
            "size": "PP",
            "sku": "5807_343_0_PP"
          },
          {
            "available": true,
            "size": "P",
            "sku": "5807_343_0_P"
          },
          {
            "available": true,
            "size": "M",
            "sku": "5807_343_0_M"
          },
          {
            "available": true,
            "size": "G",
            "sku": "5807_343_0_G"
          },
          {
            "available": false,
            "size": "GG",
            "sku": "5807_343_0_GG"
          }
        ]
      }
    ]
  };
  
  cartWithTwoProducts = {
    cart: [
      {
        "name": "VESTIDO TRANSPASSE BOW",
        "style": "20002605",
        "code_color": "20002605_613",
        "color_slug": "tapecaria",
        "color": "TAPE�ARIA",
        "on_sale": false,
        "regular_price": "R$ 199,90",
        "actual_price": "R$ 199,90",
        "discount_percentage": "",
        "installments": "3x R$ 66,63",
        "image": "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",
        "sizes": [
          {
            "available": false,
            "size": "PP",
            "sku": "5807_343_0_PP"
          },
          {
            "available": true,
            "size": "P",
            "sku": "5807_343_0_P"
          },
          {
            "available": true,
            "size": "M",
            "sku": "5807_343_0_M"
          },
          {
            "available": true,
            "size": "G",
            "sku": "5807_343_0_G"
          },
          {
            "available": false,
            "size": "GG",
            "sku": "5807_343_0_GG"
          }
        ]
      },
      {
        "name": "REGATA ALCINHA FOLK",
        "style": "20002570",
        "code_color": "20002570_614",
        "color_slug": "preto",
        "color": "PRETO",
        "on_sale": false,
        "regular_price": "R$ 99,90",
        "actual_price": "R$ 99,90",
        "discount_percentage": "",
        "installments": "3x R$ 33,30",
        "image": "https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578",
        "sizes": [
          {
            "available": true,
            "size": "PP",
            "sku": "5723_40130843_0_PP"
          },
          {
            "available": true,
            "size": "P",
            "sku": "5723_40130843_0_P"
          },
          {
            "available": true,
            "size": "M",
            "sku": "5723_40130843_0_M"
          },
          {
            "available": true,
            "size": "G",
            "sku": "5723_40130843_0_G"
          },
          {
            "available": true,
            "size": "GG",
            "sku": "5723_40130843_0_GG"
          }
        ]
      }
    ]
  };
  
  
})

test('Returns default state', () => {
  expect(carrinhoReducer(undefined, {})).toMatchSnapshot();
})

test('Adds new product', () => {
  expect(carrinhoReducer(undefined, {
    type:"ADD_PRODUCT_TO_CART",
    payload: products.products[0]
  })).toMatchSnapshot();
})

test('Add a second product', () => {
  expect(carrinhoReducer(cartWithOneProduct, {
    type:"ADD_PRODUCT_TO_CART",
    payload: products.products[1]
  })).toMatchSnapshot();
})

test('Delete a existing product', () => {
  expect(carrinhoReducer(cartWithTwoProducts, {
    type:"DELETE_PRODUCT_FROM_CART",
    payload: 1
  })).toMatchSnapshot();
})

test('Delete a non existing product should return the same state', () => {
    expect(carrinhoReducer(cartWithTwoProducts, {
        type:"DELETE_PRODUCT_FROM_CART",
        payload: 2
    })).toMatchSnapshot();
})
