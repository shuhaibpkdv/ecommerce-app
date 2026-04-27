import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar({ cartCount, dark, setDark }) {
  return (
    <div className='navbar'>
      <Link to="/" className='logo'>My Store</Link>

      <div className='nav-right'>
        <button className='theme-toggle' onClick={() => setDark(!dark)}>
          <span className='icon'>{dark ? "☀️" : "🌙"}</span>
        </button>
        
        <Link to="/cart" className='cart'>
          <span>🛒 Cart ({cartCount})</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar