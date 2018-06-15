import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setProduct} from '../actions';

export class Products extends Component{

  handleSaveProduct = product => {
    this.props.dispatchSaveProduct(setProduct(product));
  }

  handleChangeName = name =>{
    console.log(name);
  }

  handleChangePrice = price =>{
    console.log(price);
  }

  handleChangeQuantity = quantity => {
    console.log(quantity);
  }

  handleChangeTotal = total =>{
    console.log(total);
  }

  render(){
    const { name, price, quantity, total } = this.props.product;
    return(
      <tr>
          <td className="col m2 c2">
            <fieldset className="input-campo">
                <input type="text" name="nombre" value={name} onChange={this.handleChangeName} required />
                <label>Product name</label>
                <div className="borde val__normal"></div>
                <a href="##" className="limpiar"><i className="material-icons">close</i></a>
              </fieldset>
            </td>
            <td className="col m2 c2">
              <fieldset className="input-campo">
                <input type="text" name="price" value={price} onChange={this.handleChangePrice} required />
                <label>Price</label>
                <div className="borde val__normal"></div>
                <a href="##" className="limpiar"><i className="material-icons">close</i></a>
              </fieldset>
            </td>
            <td className="col m2 c2">
                <fieldset className="input-campo">
                  <input type="text" name="quantity" value={quantity} onChange={this.handleChangeQuantity} required />
                  <label>Quantity</label>
                  <div className="borde val__normal"></div>
                  <a href="##" className="limpiar"><i className="material-icons">close</i></a>
                </fieldset>
            </td>
            <td className="col m2 c2">
                <fieldset className="input-campo">
                  <input type="text" name="total" value={total} onChange={this.handleChangeTotal} required />
                  <label>Total</label>
                  <div className="borde val__normal"></div>
                  <a href="##" className="limpiar"><i className="material-icons">close</i></a>
                </fieldset>
            </td>
            <td className="col m2 c2">
              <button className="sd btn" onClick={this.handleSaveProduct}>
                  <i className="material-icons">save</i>
              </button>
            </td>
            <td className="col m2 c2">
              <button className="sd btn">
                  <i className="material-icons">delete</i>
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
