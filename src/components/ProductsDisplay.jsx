import React from 'react'; 
import ProductCard from './ProductCard.jsx'




const ProductsDisplay = ({ count }) => (
  <div className="product-display">
    {Array.from({ length: count }).map((_, i) => (
      <ProductCard index={i} key={i} />
    ))}
  </div>
);

export default ProductsDisplay; 