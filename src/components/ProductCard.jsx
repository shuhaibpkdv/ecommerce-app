import React from 'react'
import "./ProductCard.css"

function ProductCard({ product, addToCart }) {
  return (
    <div className='card'>
      <img src={product.image} />

      <h3>{product.name}</h3>
      <h3>{product.price}</h3>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard