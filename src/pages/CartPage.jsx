import React from 'react'
import "./CartPage.css"

function CartPage({ cart, increaseQty, decreaseQty, removeFromCart}) { 
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className='cart-container'>
      <h2 className='cart-title'>Your Cart</h2>

      {cart.length === 0? (
        <p>Cart is empty</p>
      ): (
        <>
          {cart.map((item, index) => (
            <div className='cart-item' key={item.id}>
              <div className='cart-info'>
                <h4>{item.name}</h4>
                <p>₹{item.price * item.qty}</p>
              </div>

              <div className='cart-actions'>
                <button onClick={() => decreaseQty(item.id)}> - </button>
                <span> {item.qty} </span>
                <button onClick={() => increaseQty(item.id)}> + </button>

                <button onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className='total'>Total: ₹{total}</div>
        </>
      )}
    </div>
  )
}

export default CartPage