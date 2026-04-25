import React from 'react'
import "./ProductCard.css"

function ProductCard({ product }) {
  return (
    <div className='card'>
      <img src={product.image} width="100%" />
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard