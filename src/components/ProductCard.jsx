import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"

function ProductCard({ product, addToCart }) {
  return (
    <div className='card'>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} />

        <h3>{product.name}</h3>
        <h3>₹{product.price}</h3>
      </Link>  

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard