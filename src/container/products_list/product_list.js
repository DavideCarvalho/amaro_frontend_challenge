import { ProductListComponent as ProductList  } from '../../components/products';
import {  getProducts } from '../../actions/product';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    productsState: state.products
  }
};

export default connect(mapStateToProps, { getProducts })(ProductList);