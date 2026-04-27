import { use, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar"
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";

function App() {
  const [cart, setCart] = useState([])

  const [search, setSearch] = useState("")

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
    <BrowserRouter>

      <Navbar cartCount={cart.length} />

      <Routes>

        <Route
          path="/"
          element={
            <div className="container">
              <input 
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  padding: "10px 0px",
                  width: "100%",
                  marginBottom: "20px",
                  borderRadius: "8px",
                  border: "1px solid #ccc"
                }}
              />
              {/* products */}
              <div className="grid">
                {products
                  .filter((p) => 
                    p.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((p) => (
                    <ProductCard key={p.id} product={p} addToCart={addToCart} />
                ))}
              </div>
            </div>
          }
        />

        <Route
          path="/product/:id" 
          element={<ProductDetails 
          addToCart={addToCart} />} 
        />

        <Route
          path="/cart"
          element={
            <CartPage 
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeFromCart={removeFromCart}
            />
          }
        />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
