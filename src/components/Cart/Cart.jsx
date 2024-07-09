import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./cart.css";
import CartItem from "./Cartitem/Item";
import poor from "../../assets/Default_a_poor_man_with_a_Bowl_1.jpg"
const Cart = ({
  cart,
  handUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {

  const renderEmptyCart = () => (
    <Typography variant="p" className="No-cart">
      <img className="poor-man" src={poor} alt="" />
      You have nothing in you cart ! <br />
      الاین سنتز هم حال نداشتم بدم 
      <Link className="link" to="/"></Link>
    </Typography>
  );

  if (!cart.line_items) return "Loading...";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={handUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
          </Grid>
        ))}
      </Grid>
      <div className="cardDetails">
        <Typography variant="p">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className="btnItems">
          <Button
            className="emptyButton"
            size="large"
            type="button"
            variant="contained"
            color="error"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className="checkoutButton"
            size="large"
            type="button"
            variant="contained"
            color="success"
            disabled
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
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
