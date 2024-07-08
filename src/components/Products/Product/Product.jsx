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

export default function index({ product }) {

  // console.log(product);
  // return <div>teast</div>

  return (
    <Card className="root">
      <CardMedia className="media" image={product.image.url} title={product.name} />
      <CardContent>
        <div className="CardContent">
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className="CardActions">
        <IconButton aria-label="Add to Cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
