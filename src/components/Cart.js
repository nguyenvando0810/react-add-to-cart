import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <section className="section">
        <h1 className=" text-right">Cart</h1>
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </section>
    )
  }
}

export default Cart