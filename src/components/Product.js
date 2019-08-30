import React from 'react';

class Product extends React.Component {
  addToCart(product) {
    this.props.addToCart(product)
  }

  render() {
    let { product } = this.props

    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower" style={{ height: '100%' }}>
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={product.imageUrl}
              className="img-fluid" alt="" />
            <span>
              <div className="mask waves-light waves-effect waves-light"></div>
            </span>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <span>{product.name}</span>
              </strong>
            </h4>
            <ul className="rating">
              {this.showRating(product.rating)}
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <span className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" data-original-title="Add to Cart"
                  onClick={this.addToCart.bind(this, product)}>
                  <i className="fa fa-shopping-cart"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  showRating(rating) {
    let result = []

    for (let i = 1; i <= rating; i++) {
      result.push(<li key={i}><i className="fa fa-star"></i></li>)
    }

    return result
  }
}

export default Product