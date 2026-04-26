import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar({ cartCount }) {
  return (
    <div className='navbar'>
      <Link to="/" className='logo'>My Store</Link>

      <Link to="/cart" className='cart'>
        🛒 Cart ({cartCount})
      </Link>
    </div>
  )
}

export default Navbar