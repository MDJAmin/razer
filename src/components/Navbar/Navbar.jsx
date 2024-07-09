import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import razerLogo from "../../assets/razer-1.svg";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
export default function Navbar({ totalItems = 0 }) {
  const location = useLocation();
  return (
    <>
      <AppBar
        position="relative"
        className="appbar"
        style={{ background: "#131313" }}
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className="title"
            color="inherit"
          >
            <img src={razerLogo} alt="Razer" height="25px" className="image" />
          </Typography>
          <div className="classes.grow" />
          {location.pathname === "/" && (
            <div className="button">
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart item"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="error">
                  <ShoppingCartIcon color="inherit" />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
