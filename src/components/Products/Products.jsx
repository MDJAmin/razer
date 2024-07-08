import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import "./style.css";
import Atropos from "atropos/react";
// const products = [
//   { id: 1, name: "SwiftClick X1", price: "$19.99" },
//   { id: 2, name: "ProMouse 360", price: "$27.49" },
//   { id: 3, name: "GlideTech MX", price: "$34.99" },
//   { id: 4, name: "AeroMouse Ultra", price: "$21.95" },
// ];

export default function Products({ products, onAddToCart }) {
  return (
    <Atropos className="my-atropos">
    <main className="content">
      <div>
      Customer Favorites !
      </div>
      <div className="toolbar" />
      <Grid container justify="center" spacing={6}>
        {products.map((product) => (
          <Grid item key={product.id} sx={12} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
    </Atropos>
  );
}
