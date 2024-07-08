import React, { useEffect, useState } from "react";
import "./App.css";
import { commerce } from "./assets/lib/commerce";
import { Products, Navbar, Cart } from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      if (item && item.cart) {
        setCart(item.cart);
      } else {
        throw new Error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setError("Failed to add item to cart");
    }
  };

  const handUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(quantity, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
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
    <Router>
      <div>
        <Navbar totalItems={cart.total_items ?? 0} />
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handUpdateCartQty={handUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
