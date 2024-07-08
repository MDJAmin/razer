import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import razerLogo from "../../assets/razer-1.svg";
import "./style.css";

export default function Navbar({ totalItems = 0 }) {
  return (
    <>
      <AppBar
        position="relative"
        className="appbar"
        style={{ background: "#131313" }}
      >
        <Toolbar>
          <Typography variant="h6" className="title" color="inherit">
            <img src={razerLogo} alt="Razer" height="25px" className="image" />
          </Typography>
          <div className="classes.grow" />
          <div className="button">
            <IconButton aria-label="Show cart item" color="inherit">
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCartIcon color="inherit" />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
