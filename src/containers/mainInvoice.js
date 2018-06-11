import React, {Component} from 'react';
import InvoiceFooter from './invoiceFooter';
import {connect} from 'react-redux';
import {
  setProduct
} from '../actions';
import { ProductListContainer } from './productListContainer';

export class MainInvoice extends Component {
  render(){
    return(
      <div class="contenedor pd-ar-10">
        <table class="tabla tabla-zebra">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
              <ProductListContainer products={this.props.product}/>
            </tbody>
          </table>
        <InvoiceFooter/>
      </div>
    )
  }
}

const mapDispatchToPropsActions = dispatch => ({
  dispatchSetProduct: value => dispatch(setProduct(dispatch))
});

const MainInvoiceConnected = connect(null, mapDispatchToPropsActions)(MainInvoice)
export default MainInvoiceConnected;
