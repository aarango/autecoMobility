import React from 'react';
import './index.css';
import ProductDetail from './ProductDetail';

function ProductViewer({ products = [] }) {
  return (
    <div className='main'>
      <ProductDetail products={products} />
    </div>
  );
}

export default ProductViewer;
