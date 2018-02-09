// @flow
import React from 'react';
import type { ProductListType } from '../../types/Products/product_list_type';
import Product from "./product";

type ProductListContainerType = {
  productsState: ProductListType,
  getProducts: Function
}

export default class ProductList extends React.Component<ProductListContainerType> {

  componentWillMount() {
    this.props.getProducts();
  }

  render () {
    console.log(this.props.productsState.products[0])
    return (
      <div>{
        !this.props.productsState.products ?
        <h1>Carregando</h1> :
        this.props.productsState.products.map(product => {
          return (
            <Product {...product} />
          )
        })
      }
      </div>
    )
  }
}