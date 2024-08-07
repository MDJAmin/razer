import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./style.css";
export default function index({ product, onAddToCart }) {
  return (
    <Card className="root">

        <CardMedia
          className="media"
          image={product.image.url}
          // title={product.name}
          onClick={() => onAddToCart(product.id, 1)}
        />
      <CardContent>
        <div className="CardContent">
          <Typography variant="p" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="p">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className="CardActions">
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        > 
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
