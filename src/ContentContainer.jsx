import React from 'react'; 
import ProductDisplay from './ProductDisplay.jsx'

const ContentContainer = (props) => {
  console.log('ContentContainer', props.dogImages)
    return( 
      <ProductDisplay 
        dogImages={props.dogImages} 
      /> 
   ); 
}; 

export default ContentContainer; 