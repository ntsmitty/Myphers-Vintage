import React from 'react'; 

//pass all props down to the component, (dog images) 
const ProductCard = ({ imageUrl, index, handleClick }) => {
  return (
    <div className="product-card">
      <img alt="" src={imageUrl} />
      {/* <button onClick={() => handleClick(index)}>Add To Cart</button> */}
    </div>
  );
};

export default ProductCard; 