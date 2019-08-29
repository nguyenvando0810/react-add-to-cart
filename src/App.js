import React from 'react';
import Header from './components/Header'
import ProductsContainer from './container/productsContainer'
import Message from './components/Message'
import CartContainer from './container/cartContainer'
import Footer from './components/Footer'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/*Header */}
        <Header />

        <main id="mainContainer">
          <div className="container">
            {/*Products*/}
            <ProductsContainer />
            {/* Message */}
            <Message />
            {/* Cart */}
            <CartContainer />
          </div>
        </main>
        {/*Footer*/}
        <Footer />
      </div>
    );
  }
}

export default App;
