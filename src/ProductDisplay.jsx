//will display product images with marquee animation. 
import React from 'react';

const ProductDisplay = (props) => {
 return (
   <div className="Product-Display"> 
     { props.dogImages }
     <button>Info</button>
   </div>
  )
}

export default ProductDisplay; 