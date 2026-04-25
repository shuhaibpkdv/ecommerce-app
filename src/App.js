import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <h1>My Store</h1>

      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default App;
