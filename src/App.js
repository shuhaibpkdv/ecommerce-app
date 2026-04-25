import { useState } from "react";
import "./App.css"
import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="container">
      <h1>My Store</h1>

      <h2>Cart: {cart.length} items</h2>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
