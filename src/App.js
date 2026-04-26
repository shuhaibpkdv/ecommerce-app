import { useState } from "react";
import "./App.css"
import Navbar from "./components/Navbar"
import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id)

    if(exist) {
      const updatedCart = cart.map((item) => 
        item.id === product.id
          ? { ...item, qty: item.qty + 1}
          : item
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, {...product, qty: 1}])
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove)
    setCart(updatedCart)
  }

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) => 
      item.id === id ? {...item, qty: item.qty + 1} : item
    )
    setCart(updatedCart)
  }

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) => 
        item.id === id ? {...item, qty: item.qty - 1} : item
      )
      .filter((item) => item.qty > 0)

    setCart(updatedCart)
  }

  return (
    <div className="container">
      <Navbar cartCount={cart.length} />

      <h3>Total: {total}</h3>

      {/* Cart items */}
      <div>
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
      </div>

      {/* products */}
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
