import React, { useEffect, useState } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import Product from "./Product/Product";
import "./style.css";

// const products = [
//   { id: 1, name: "SwiftClick X1", price: "$19.99" },
//   { id: 2, name: "ProMouse 360", price: "$27.49" },
//   { id: 3, name: "GlideTech MX", price: "$34.99" },
//   { id: 4, name: "AeroMouse Ultra", price: "$21.95" },
// ];

export default function Products({ products, onAddToCart }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  return (
    <main className="content">
      <div className="Title">
        Customer Favorites!
      </div>
      <div className="toolbar" />
      {loading ? (
        <Grid container justify="center" spacing={6}>
          {Array.from(new Array(8)).map((_, index) => (
            <Grid item key={index} sx={12} md={4} lg={3}>
              <Skeleton variant="rectangular" width={350} height={300} sx={{ bgcolor: 'rgba(35, 181, 99, 0.07)' }}/>
              <Box sx={{ pt: 0.5 }} >
                <Skeleton sx={{ bgcolor: 'rgba(35, 181, 99, 0.07)' }}/>
                <Skeleton width="60%" sx={{ bgcolor: 'rgba(35, 181, 99, 0.07)' }}/>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container justify="center" spacing={6}>
          {products.map((product) => (
            <Grid item key={product.id} sx={12} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      )}
    </main>
  );
}
