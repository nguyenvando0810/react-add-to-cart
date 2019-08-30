import React from 'react';
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import * as MESS from './../constants/message'
import { deleteCart, updateProductCart, completePurchase } from './../actions/index'

class CartContainer extends React.Component {
  render() {
    let { cart } = this.props

    return (this.showCart(cart))
  }

  showCart(cart) {
    if (cart.length > 0) {
      return (<Cart>
        {this.showCartItem(cart)}
        {this.showCartTotal(cart)}
      </Cart>)
    } else {
      return <h1 className="text-center mt-5 mb-5">{MESS.EMPTY_CART}</h1>
    }
  }

  showCartItem(cart) {
    let result = cart.map((item, index) => {
      return (
        <CartItem key={index} item={item} onDeleteCartItem={this.props.onDeleteCartItem} onUpdateCartItem={this.props.onUpdateCartItem} />
      )
    })

    return result
  }

  showCartTotal(cart) {
    return (
      <CartResult
        cart={cart}
        onUpdateTotalCart={this.props.onUpdateTotalCart}
        totalCart={this.props.totalCart}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalCart : state.totalCart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteCartItem: (id) => {
      dispatch(deleteCart(id))
    },

    onUpdateCartItem: (product, quantity) => {
      dispatch(updateProductCart(product, quantity))
    },

    onUpdateTotalCart: (total) => {
      dispatch(completePurchase(total))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);