import React from 'react'; 

//pass all props down to the component, (dog images) 
const ProductCard = ({ imageUrl, index, handleClick }) => {
  return(
    <div className="product-card">
      <div className="card-front"> 
        <div className="card-front-content">
          <img alt="" src={imageUrl} />
        </div>
     </div> 
     <div className="card-back"> 
       <div className="card-back-content">
         <p>HELLO</p>
       </div> 
     </div>
   </div>
  );
};

export default ProductCard; 
  {/* <button onClick={() => handleClick(index)}>Add To Cart</button> */}