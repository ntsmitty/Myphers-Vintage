import React from 'react'; 
import  { ImagesContext } from '../containers/ContentContainer.jsx'



const ProductCard = ({ imageUrls, index, handleClick }) => (
 <ImagesContext.Consumer> 
    {({ imageUrls }) => (      
     <div className="product-card">
        <div className="card-front"> 
          <div className="card-front-content">
            <img alt="" src={imageUrls[index]} />
         </div>
        </div> 
      <div className="card-back"> 
         <div className="card-back-content">
           <h1 className="price-info">Price: $1,000,000</h1>
           <button className="addtocart-btn">Add To Cart</button>
         </div> 
      </div>
     </div>
    )} 
 </ImagesContext.Consumer>
); 

export default ProductCard; 