import React from 'react'
import {useParams} from "react-router-dom"
import products from '../data/products'
import "./ProductDetails.css"

function ProductDetails( {addToCart} ) {
  const { id } =useParams()

  const product = products.find((p) => p.id === Number(id))

  if(!product) {
    return (
      <h2>Product not found</h2>
    )
  }

  return (
    <div className='details-container'>
      <img 
        className='details-image' 
        src={product.image} 
        alt={product.name} 
      />

      <div>
        <h2>{product.name}</h2>
        <p className='price'>{product.price}</p>

        <p>
          This is a high-quality product. perfect for daily use. Good design and durability.
        </p>

        <button
          className='add-btn'
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails