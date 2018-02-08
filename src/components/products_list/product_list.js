// @flow
import React from 'react';
import jsonData from '../../products.json';
import type { ProductListType } from '../../types/Products/product_list_type';

export default class ProductList extends React.Component<ProductListType> {

  async componentWillMount() {
    console.log(jsonData);
  }

  render () {
    console.log(this.props)
    return (
      <h1>Hello World</h1>
    )
  }
}