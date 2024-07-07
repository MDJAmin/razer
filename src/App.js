import React from "react";
import "./App.css"
// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";

import { Products, Navbar } from "./components/index"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Products/>
    </div>
  );
}
