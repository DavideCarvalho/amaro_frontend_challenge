// @flow
import React from 'react';
import type { ProductListType } from '../../types/Products/product_list_type';
import { connect } from 'react-redux';

class ProductList extends React.Component<ProductListType> {

  async componentWillMount() {
    const productsData = await fetch('../../../products.json');
    console.log(productsData);
  }

  render () {
    console.log(this.props)
    return (
      <h1>Hello World</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductList);