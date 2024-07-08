import React from "react";
import heroSection from "../../assets/Hero.png";
import { Button } from "@mui/material";
import "./style.css";

export default function Hero() {
  return (
    <div>

      <div>
        <img className="Hero-img" src={heroSection} alt="Hero Section" />
      </div>

      <div className="Hero-items">
        <div>
          <p>Personalized Items</p>
          <Button
            className="checkoutButton"
            size="large"
            type="button"
            variant="contained"
            color="success"
          >
            Shop wireless headphone
          </Button>
        </div>
        <div className="Description-section">
          <p className="Description">Description :</p>
          <p className="Description-p">
            "Dive into gaming like never before with the Immortal 1000D
            headphones, crafted to elevate your gaming experience to new
            heights. Boasting advanced 7.1 Channel Surround Sound technology,
            these headphones immerse you in rich, lifelike audio that brings
            every detail of your favorite games to vivid life. Whether you're
            navigating intense battlefields or exploring expansive worlds, the
            precise spatial awareness provided by the 7.1 surround sound ensures
            you never miss a crucial sound cue.
            <br />
            <br />
            Designed with both comfort and style in mind, the Immortal 1000D
            headphones feature plush, ergonomic ear cups that provide hours of
            fatigue-free gaming. The adjustable headband ensures a perfect fit
            for every gamer, while the breathable materials keep you cool and
            focused during extended play sessions. Enhancing your gaming setup
            further, customizable RGB lighting on the headphones allows you to
            match your personal aesthetic or sync with your gaming rig's
            lighting scheme, adding a touch of flair to your gaming environment.
            <br />
            <br />
            With its combination of immersive audio, ergonomic design, and
            customizable features, the Immortal 1000D headphones are not just an
            accessory but a vital companion for every epic gaming journey."
          </p>
        </div>
      </div>
    </div>
  );
}
