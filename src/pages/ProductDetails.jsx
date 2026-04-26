import React from 'react'
import {useParams} from "react-router-dom"
import products from '../data/products'

function ProductDetails() {
  const { id } =useParams()

  const product = products.find((p) => p.id === Number(id))

  if(!product) {
    return (
      <h2>Product not found</h2>
    )
  }

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} width="300px" />
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
    </div>
  )
}

export default ProductDetails