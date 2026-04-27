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

  const [category, setCategory] = useState("All")

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

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name 
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchCategory =
      category === "All" || p.category === category

    return matchSearch && matchCategory
  })

  return (
    <BrowserRouter>

      <Navbar cartCount={cart.length} />

      <Routes>

        <Route
          path="/"
          element={
            <div className="container">
              <div className="search-box">
                <input 
                  type="text"
                  placeholder=" Search products"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="filters">
                <button onClick={() => setCategory("All")}>All</button>
                <button onClick={() => setCategory("Fashion")}>Fashion</button>
                <button onClick={() => setCategory("Electronics")}>Electronics</button>
                <button onClick={() => setCategory("Accessories")}>Accessories</button>
              </div>
              {/* products */}
              <div className="grid">
                  {
                    filteredProducts.length > 0 ? (
                      filteredProducts.map((p) => (
                        <ProductCard key={p.id} product={p} addToCart={addToCart} />
                      ))
                    ) : (
                      <p style={{ textAlign: "center", width: "100%" }}>
                        No products found 😢
                      </p>
                    )
                  }
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
