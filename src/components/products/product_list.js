// @flow
import React from 'react';
import Product from "./product";

type ProductListContainerType = {
  productsState: ProductListType,
  getProducts: () => void
}

export default class ProductList extends React.Component<ProductListContainerType> {

  componentWillMount() {
    this.props.getProducts();
  }

  render () {
    console.log(this.props.productsState.products[0])
    return (
      <div className="columns is-multiline">{
        !this.props.productsState.products ?
        <h1>Carregando</h1> :
        //this.props.productsState.products.map(product => {
          //return (
            //<div class="is-one-quarter bd-notification">
              //<Product {...product} />
              <Product {...this.props.productsState.products[0]} />
            //</div>
          //)
        //})
      }
      </div>
    )
  }
}
