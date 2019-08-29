import React from 'react';

class CartResult extends React.Component {
  render() {
    let { cart } = this.props

    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showCartTotal(cart)} $</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase &nbsp;<i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    )
  }

  showCartTotal(cart) {
    let total = null

    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].product.price * cart[i].quantity
      }
    }

    return total
  }
}

export default CartResult