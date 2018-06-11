import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setProduct} from '../actions';

export class Products extends Component{

  handleSaveProduct = product => {
    console.log('function');
    this.props.dispatchSaveProduct(setProduct(product));
  }

  handleChangeName(e) {
    console.log('asdf');
    debugger;
    this.setState({
      name: e.target.value
    });
  }

  handleChangeTotal(e){
    console.log('total changed');
    this.setState({total: e.target.value});
  }
  render(){
    const { name, price, quantity, total } = this.props.product;
    return(
      <tr>
          <td class="col m2 c2">
            <fieldset class="input-campo">
                <input type="text" name="nombre" value={name} required onChange={this.handleChangeName} />
                <label>Product name</label>
                <div class="borde val__normal"></div>
                <a href="#" class="limpiar"><i class="material-icons">close</i></a>
              </fieldset>
            </td>
            <td class="col m2 c2">
              <fieldset class="input-campo">
                <input type="text" name="price" value={price} required />
                <label>Price</label>
                <div class="borde val__normal"></div>
                <a href="#" class="limpiar"><i class="material-icons">close</i></a>
              </fieldset>
            </td>
            <td class="col m2 c2">
                <fieldset class="input-campo">
                  <input type="text" name="quantity" value={quantity} required />
                  <label>Quantity</label>
                  <div class="borde val__normal"></div>
                  <a href="#" class="limpiar"><i class="material-icons">close</i></a>
                </fieldset>
            </td>
            <td class="col m2 c2">
                <fieldset class="input-campo">
                  <input type="text" name="total" value={total} required onChange={this.handleChangeTotal} />
                  <label>Total</label>
                  <div class="borde val__normal"></div>
                  <a href="#" class="limpiar"><i class="material-icons">close</i></a>
                </fieldset>
            </td>
            <td class="col m2 c2">
              <button class="sd btn" onClick={this.handleSaveProduct}>
                  <i class="material-icons">save</i>
              </button>
            </td>
            <td class="col m2 c2">
              <button class="sd btn">
                  <i class="material-icons">delete</i>
              </button>
            </td>
      </tr>
    )
  }
}

const mapDispatchToPropsActions = dispatch => ({
  dispatchSaveProduct: value => dispatch(setProduct(dispatch))
});
const mapStateToProps = ({ product }) => ({ product });
const ProductConnected = connect(mapStateToProps, mapDispatchToPropsActions)(Products);
export default ProductConnected
