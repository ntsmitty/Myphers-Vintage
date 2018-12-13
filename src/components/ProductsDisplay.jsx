import React from 'react'; 
import ProductCard from './ProductCard.jsx'
import Header from '../components/Header.jsx'



const ProductsDisplay = ({ imageUrls, ...props }) => {
  // index is not a good key
  const productImages = imageUrls.map((image, i) => (
    <ProductCard alt=" " key={image} index={i} imageUrl={image} {...props} />
  ));
  return (
    <>
      <Header />
      <div className="product-display">{productImages}</div>
    </>
   );
 }; 

export default ProductsDisplay; 