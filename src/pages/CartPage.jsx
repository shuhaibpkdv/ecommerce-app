import React from 'react'

function CartPage({ cart, increaseQty, decreaseQty, removeFromCart}) { 
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0? (
        <p>Cart is empty</p>
      ): (
        <>
          {cart.map((item, index) => (
            <div key={item.id}>
              {item.name} - ₹{item.price * item.qty}

              <button onClick={() => decreaseQty(item.id)}> - </button>
              <span> {item.qty} </span>
              <button onClick={() => increaseQty(item.id)}> + </button>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  )
}

export default CartPage