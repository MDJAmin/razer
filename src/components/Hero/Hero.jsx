import React from "react";
import heroSection from "../../assets/Hero.png";
import { Button } from "@mui/material";
import "./style.css";
export default function Hero() {
  return (
    <div>
      <div className="hero-sec">
        <img className="Hero-img" src={heroSection} alt="Hero Section" />
        <div className="Hero-items">
          <div className="btn-sec">
            <Button
              className="shopBtn"
              size="large"
              type="button"
              variant="contained"
              color="success"
            >
              Shop wireless headphone
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
