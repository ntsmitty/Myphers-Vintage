import React from 'react'; 
import { Component } from'react'
import ProductsDisplay from './ProductsDisplay.jsx'
import Header from './Header.jsx'
const endpoint = 'https://dog.ceo/api/breeds/image/random/8 '

class ContentContainer extends Component {
  state = {
    imageUrls: []
  };

  componentDidMount() {
    return fetch(endpoint)
      .then(response => response.json())
      .then(jsonData => {
         const imageData = jsonData.message
         this.setState({ imageUrls: imageData })
      })
      .catch(error => console.log(error)) 
  }; 

  handleClick = index => {
    alert(index);
  };


  render() {
    return (
     <>
      <Header />
      <div className="content-container">
        <ProductsDisplay
          imageUrls={this.state.imageUrls}
          handleClick={this.handleClick}
        />
       </div> 
     </>
    );
  };
};

export default ContentContainer; 