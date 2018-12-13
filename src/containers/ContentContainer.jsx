import React from 'react'; 
import { Component } from'react'
import ProductsDisplay from '../components/ProductsDisplay.jsx'
const endpoint = 'https://dog.ceo/api/breeds/image/random/8 '

export const ImagesContext = React.createContext({});

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

  render() {
    return(
     <>
       <ImagesContext.Provider value={{ imageUrls: this.state.imageUrls }}> 
          <div className="content-container">
            <ProductsDisplay count={this.state.imageUrls.length} /> 
          </div>
       </ImagesContext.Provider>
     </>
    );
  }; 
};

export default ContentContainer; 