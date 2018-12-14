import React from 'react'; 
import Header from '../components/Header.jsx'
import ProductCard from './ProductCard.jsx'




const ProductsDisplay = ({ count }) => (
  <div className="product-display">
    <Header />
    {Array.from({ length: count }).map((_, i) => (
      <ProductCard index={i} key={i} />
    ))}
  </div>
);

export default ProductsDisplay; 