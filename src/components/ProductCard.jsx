import React from 'react'
import products from '../data/products'

function ProductCard({ product }) {
  return (
    <div style={{border: "1px solid #ccc", padding: "10px"}}>
      <img src={product.image} width="100%" />
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard