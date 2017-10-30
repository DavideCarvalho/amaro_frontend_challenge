import carrinhoReducer from '../reducers/reducer_carrinho'
import products from '../../products.json';

describe('Carrinho Reducer', () => {
    it('Returns default state', () => {
        expect(carrinhoReducer(undefined, {})).toEqual({
            cart: []
        });
    })
    it('Adds new product', () => {
        expect(carrinhoReducer(undefined, {
            type:"ADD_PRODUCT",
            payload: products.products[0]
        })).toEqual(cartWithOneProduct)
    })
    it('Add a second product', () => {
        expect(carrinhoReducer(cartWithOneProduct, {
            type:"ADD_PRODUCT",
            payload: products.products[0]
        })).toEqual(cartWithTwoProduct)
    })
    it('Delete a existing product', () => {
        expect(carrinhoReducer(undefined, {
            type:"DELETE_PRODUCT",
            payload: 0
        })).toEqual({cart:[]})
    })
    it('Delete a non existing product should return the same state', () => {
        expect(carrinhoReducer(undefined, {
            type:"DELETE_PRODUCT",
            payload: 0
        })).toEqual({cart:[]})
    })
})


const cartWithOneProduct = {
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

const cartWithTwoProduct = {
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