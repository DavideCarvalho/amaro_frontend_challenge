// @flow
import React from 'react';
import type { ProductType } from '../../types/Products/product';

export default class Product extends React.Component<ProductType> {
  constructor(props: ProductType) {
    super(props);
    console.log(props);
  }
  render () {
    return (
      <h1>{this.props.name}</h1>
    )
  }
}