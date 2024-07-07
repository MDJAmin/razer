import React from "react";
import "./App.css"
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Products/>
    </div>
  );
}
