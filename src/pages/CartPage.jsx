import React, { useState } from 'react'
import "./CartPage.css"

function CartPage({ cart, setCart, increaseQty, decreaseQty, removeFromCart}) { 

  const [showPopup, setShowPopup] = useState(false)

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

            <button 
              className='checkout-btn' 
              onClick={() => setShowPopup(true)}
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </button>

            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <h3>🎉 Order Placed!</h3>
                  <p>Your order was successful.</p>

                  <button onClick={() => {
                    setShowPopup(false)
                    setCart([])
                  }}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage