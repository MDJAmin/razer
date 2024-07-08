import React, { useEffect, useState } from "react";
import "./App.css";
import { commerce } from "./assets/lib/commerce";
import { Products, Navbar } from "./components/index";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (error) {
      setError("Failed to fetch products");
    }
  };

  const fetchCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    } catch (error) {
      setError("Failed to fetch cart");
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item.cart);
    } catch (error) {
      setError("Failed to add item to cart");
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
    fetchCart();
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
}
