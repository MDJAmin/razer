import React from "react";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>Razor | All Rights Reserved</div>
      <div>
        <YouTubeIcon/> <InstagramIcon /> <XIcon />
      </div>
    </div>
  );
}
