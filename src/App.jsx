import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Phone", price: 800, inStock: false },
    { id: 3, name: "Tablet", price: 500, inStock: true }
  ]);

  function handleRemove(id) {
    setProducts(products.filter(product => product.id !== id));
  }

  return (
    <>
      <h1>Product Dashboard</h1>
      <ProductList products={products} onRemove={handleRemove} />
    </>
  );
}

export default App;
