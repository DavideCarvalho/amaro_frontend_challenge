// @flow
import React from 'react';
// import type { ProductType } from '../../types/Products/product';
import _ from 'lodash';

export default class Product extends React.Component<ProductType> {
  constructor(props: ProductType) {
    super(props);
    console.log(props);
  }
  render () {
    console.log(this.props.sizes);
    _.map(this.props.sizes, (object,index) => console.log(object));
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.actual_price}</h1>
        <h1>{this.props.code_color}</h1>
        <h1>{this.props.color}</h1>
        <h1>{this.props.color_slug}</h1>
        <h1>{this.props.discount_percentage}</h1>
        <figure className="image is-128x128">
          <img src={this.props.image} />
        </figure>
        <h1>{this.props.installments}</h1>
        <h1>{this.props.on_sale}</h1>
        <h1>{this.props.regular_price}</h1>
        {_.map(this.props.sizes, (object, index) => {
          return (
            <div key={index}>
              <p>{object.available}</p>
            </ div>
          )
        })}
      </ div>
    )
  }
}
