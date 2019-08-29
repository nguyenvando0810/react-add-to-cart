import React from 'react';

class Products extends React.Component {
  render() {
    return (
      <main id="mainContainer">
        <div className="container">
          <section className="section">
            <h1 className="section-heading">List Products</h1>
            <div className="row">
              {/*Product*/}
              {this.props.children}
            </div>
          </section>
        </div>
      </main>
    )
  }

}

export default (Products);