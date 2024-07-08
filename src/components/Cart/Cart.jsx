import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
// import CartItem from './CartItem/CartItem';
import './style.css';

const Cart = ({ cart }) => {

//   const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className="link" to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
            {/* <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} /> */}
          </Grid>
        ))}
      </Grid>
      <div className="cardDetails">
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        {/* <div>
          <Button className="emptyButton" size="large" type="button" variant="contained" color="secondary">Empty cart</Button>
          <Button className="checkoutButton" component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div> */}
      </div>
    </>
  );

  return (
    <Container>
      <div className="toolbar" />
      <Typography className="title" variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
