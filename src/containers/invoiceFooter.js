import React, {Component} from 'react';


export class InvoiceFooter extends Component{

  render(){
    return(
      <div>
        <br/>
          <table class="medicos-tabla tabla-zebra tabla-accion">
            <thead><tr><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead>
            <tbody>
              <tr>
                <td class="col m9 g9">&nbsp;</td>
                <td class="col m1 g1 alinear-der">
                    <label>Sub Total</label>
                </td>
                <td class="col m1 g1">$10.00</td>
              </tr>
              <tr>
                <td class="col m9 g9">&nbsp;</td>
                <td class="col m1 g1 alinear-der">
                    <label>Tax(5%)</label>
                </td>
                <td class="col m1 g1">$10.00</td>
              </tr>
              <tr>
                <td class="col m9 g9">&nbsp;</td>
                <td class="col m1 g1 alinear-der">
                    <label>Total</label>
                </td>
                <td class="col m1 g1">$50.00</td>
              </tr>

            </tbody>
          </table>
      </div>
    )
  }
}


export default InvoiceFooter;
