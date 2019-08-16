import React from 'react';
import './App.css';
import Navbar from '../Components/NavBar/NavBar';
import Hero from '../Components/Hero/Hero';
import Pro from '../Components/Products/Pro';
import product from '../Components/Products/images/products.json'
import Title from '../Components/Products/Title';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      product: product
    }
  }

  // getProduct = () => {


  // }




  render() {
    

    return (
      <div>
        <Navbar />
        <Hero />
        <Title />
        <Pro product={this.state.product} />
      </div>
    );
  }
}

export default App;
