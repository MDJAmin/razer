import React from "react";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-dis">Razor | All Rights Reserved</p>
      <div>
        <YouTubeIcon />

        <InstagramIcon />

        <XIcon />
      </div>
    </div>
  );
}
