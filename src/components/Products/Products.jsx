import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "SwiftClick X1", price: "$19.99" },
  { id: 2, name: "ProMouse 360", price: "$27.49" },
  { id: 3, name: "GlideTech MX", price: "$34.99" },
  { id: 4, name: "AeroMouse Ultra", price: "$21.95" },
];
export default function Products() {
  return (
    <main>
      <Grid container justifyContent={"center"} spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} sx={12} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
