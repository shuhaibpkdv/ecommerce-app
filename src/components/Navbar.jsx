import React from 'react'
import "./Navbar.css"

function Navbar({ cartCount }) {
  return (
    <div className='navbar'>
      <h2 className='logo'>My Store</h2>

      <div className='cart'>
        🛒 Cart ({cartCount})
      </div>
    </div>
  )
}

export default Navbar