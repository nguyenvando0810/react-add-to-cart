import React from 'react';

class CartResult extends React.Component {
  render() {
    let { cart } = this.props

    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Total:</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showCartTotal(cart)} $</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#exampleModalCenter"
            onClick={this.completePurchase.bind(this, this.showCartTotal(cart))}>
            Complete purchase &nbsp;<i className="fa fa-angle-right right"></i>
          </button>

          <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" id="exampleModalLongTitle">Total cart :</h2>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h4 className="pt-4 pb-4">Total : {this.props.totalCart}</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
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

  completePurchase(total) {
    this.props.onUpdateTotalCart(total)
  }
}

export default CartResult