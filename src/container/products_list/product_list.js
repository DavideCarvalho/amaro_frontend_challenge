import { ProductListComponent as ProductList  } from '../../components/products_list';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductList);