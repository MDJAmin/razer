import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from "./style";

export default function index({ product }) {
  const classes = useStyles;
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.img} title={product.name} />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to Cart">
          <ShoppingCartIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
