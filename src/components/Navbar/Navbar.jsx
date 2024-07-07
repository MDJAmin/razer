import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  // MenuItem,
  // Menu,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import razerLogo from "../../assets/razer-1.svg";
// import useStyle from "./style";
import "./style.css"
export default function Navbar() {
  // const classes = useStyle();
  return (
    <>
      <AppBar position="fixed" className="appBar" color="inherit">
        <Toolbar>
          <Typography variant="h6" className="title" color="inherit">
            <img
              src={razerLogo}
              alt="Razer"
              height="25px"
              className="image"
            />
          </Typography>
          <div className="classes.grow" />
          <div className="button">
            <IconButton aria-label="Show cart item" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
  // return (
  //   <>
  //     <AppBar position="fixed" color="inherit">
  //       <Toolbar>
  //         <Typography variant="h6" color="inherit">
  //           <img src={razerLogo} alt="Razer" height="25px" />
  //         </Typography>
  //         <div />
  //         <div>
  //           <IconButton aria-label="Show cart item" color="inherit">
  //             <Badge badgeContent={4} color="secondary">
  //               <ShoppingCartIcon />
  //             </Badge>
  //           </IconButton>
  //         </div>
  //       </Toolbar>
  //     </AppBar>
  //   </>
  // );
}
