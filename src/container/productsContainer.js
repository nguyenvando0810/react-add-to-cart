import React from 'react';
import Products from '../components/Products'
import Product from '../components/Product'
import { connect } from 'react-redux'
import { addToCart } from '../actions/index'

class ProductsContainer extends React.Component {
  render() {
    let { products } = this.props

    return (
      <Products >
        {this.showProducts(products)}
      </Products>
    )
  }

  showProducts(products) {
    if (products.length > 0) {
      return products.map((product, index) => {
        return (
          <Product key={index} product={product} addToCart={this.props.addToCart}/>
        )
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addToCart: (product) =>{
      dispatch(addToCart(product, 1))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);