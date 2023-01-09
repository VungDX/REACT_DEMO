/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "../styles/PSPDFKit.css";

class PSPDFKit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideButton: false,
    };
  }

  render() {
    return (
      <div className="container mt-10 px-10">
        <div className="title">
          <h1>Invoice</h1>
        </div>

        <div className="content">
          <div className="info">
            <p>
              No.: 00091
              <br />
              Vienna, May 12, 2021
              <br />
            </p>
            <p className="label">Customer:</p>
            <p>
              Company name <br />
              3643 Viking Drive
              <br />
              1234 Vienna
              <br />
              VAT No.: AT U12345678
            </p>
          </div>

          <div className="invoice-box">
            <table cellpadding="0" cellspacing="0">
              <tbody>
                <tr className="heading">
                  <td>Description</td>
                  <td>QTY</td>
                  <td>Price</td>
                  <td>Discount</td>
                  <td>Amount</td>
                </tr>

                <tr className="item">
                  <td>
                    Minimalist Sofa <br />
                    Color: Wood / Black
                  </td>
                  <td>1</td>
                  <td>4.200,00 €</td>
                  <td>0%</td>
                  <td>4.200,00 €</td>
                </tr>

                <tr className="item">
                  <td>
                    Funky Lounge Chair <br />
                    Color: Black / Black
                  </td>
                  <td>1</td>
                  <td>3.500,00 €</td>
                  <td>0%</td>
                  <td>3.500,00 €</td>
                </tr>

                <tr className="item">
                  <td>
                    Kitchen Chair <br />
                    Color: White / Silver
                  </td>
                  <td>10</td>
                  <td>300,00 €</td>
                  <td>0%</td>
                  <td>3.000,00 €</td>
                </tr>

                <tr className="item">
                  <td>Shipping Costs</td>
                  <td>1</td>
                  <td>300,00 €</td>
                  <td>100%</td>
                  <td>0,00 €</td>
                </tr>

                <tr className="total">
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>10.700,00 €</td>
                </tr>
              </tbody>
            </table>

            <div className="notes">
              <p>Evelitat endanda nonsecto blant autemque re exerio volorporeium eos eicabo. Rendant eos aut a ducit eum quid magnatur aut pra volorit.</p>

              <div className="signature">
                <label for="signed-off" className="label">
                  Invoice prepared by:
                </label>
                <input type="text" id="signed-off" className="form-border" value="John Doe" />
              </div>
            </div>

            <div className="company-info">
              <div className="company-info-item">
                <p>
                  <strong>PSPDFKit</strong>
                  <br />
                  Kaiserstrasse 117 / 17 <br />
                  1070 Vienna, Austria
                </p>
              </div>

              <div className="company-info-item">
                <p>
                  <br />
                  Limited Liability Company <br />
                  VAT ID: AT U68169117
                </p>
              </div>

              <div className="company-info-item">
                <p>
                  <br />
                  <a href="https://pspdfkit.com/">www.pspdfkit.com</a>
                  <br />
                  <a href="mailto:sales@pspdfkit.com">sales@pspdfkit.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PSPDFKit;
