import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from './products';
import {setProduct} from '../actions';

export class ProductListContainer extends Component{
  render(){
    return(
      <Products product={this.props.product}/>
    )
  }
}

const mapDispatchToPropsActions = dispatch => ({
  dispatchSetProduct: value => dispatch(setProduct(dispatch))
});
const ProductListContainerConnected = connect(null, mapDispatchToPropsActions)(ProductListContainer)
export default ProductListContainerConnected;
