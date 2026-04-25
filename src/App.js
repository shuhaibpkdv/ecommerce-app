import "./App.css"
import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="container">
      <h1>My Store</h1>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default App;
