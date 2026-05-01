import React from 'react'
import "./CartPage.css"

function CartPage({ cart, increaseQty, decreaseQty, removeFromCart}) { 
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className='cart-container'>
      <h2 className='cart-title'>Your Cart</h2>

      {cart.length === 0? (
        <p className='empty'>Cart is empty 🛒</p>
      ): (
        <>
          {cart.map((item, index) => (
            <div className='cart-item' key={item.id}>
              <img src={item.image} alt={item.name} className="cart-img" />

              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div className="cart-actions">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>

              <div className="cart-right">
                <p className="item-total">₹{item.price * item.qty}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className='checkout'>
            <h3>Total: ₹{total}</h3>

            <button className='checkout-btn' disabled={cart.length === 0}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage