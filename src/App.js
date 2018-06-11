import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { setProduct } from './actions';
import { MainInvoice } from './containers/mainInvoice';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MainInvoice product={this.props.product}/>
      </div>
    );
  }
}

const mapDispatchToPropsActions = dispatch => ({
  dispatchSetProduct: value => dispatch(setProduct(dispatch))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App)
export default AppConnected;
