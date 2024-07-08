import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";
import CartItem from "./Cartitem/Item";

const Cart = ({ cart }) => {
  //   const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className="link" to="/"></Link>!
    </Typography> 
  );

  if (!cart.line_items) return "Loading...";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
            {/* <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} /> */}
          </Grid>
        ))}
      </Grid>
      <div className="cardDetails">
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className="btnItems">
          <Button
            className="emptyButton"
            size="large"
            type="button"
            variant="contained"
            color="error"
          >
            Empty cart
          </Button>
          <Button
            className="checkoutButton"
            size="large"
            type="button"
            variant="contained"
            color="success"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className="toolbar" />
      <Typography className="title" variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
