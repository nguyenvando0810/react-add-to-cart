import React from 'react';
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import * as MESS from './../constants/message'

class CartContainer extends React.Component {
  render() {
    let { cart } = this.props

    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showCartTotal(cart)}
      </Cart>
    )
  }

  showCartItem(cart) {
    let result = MESS.EMPTY_CART

    result = cart.map((item, index) => {
      return (
        <CartItem key={index} item={item} />
      )
    })

    return result
  }

  showCartTotal(cart) {
    return <CartResult cart={cart} />
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(CartContainer);