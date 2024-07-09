import React from "react";
import offerBg from "../../assets/Offers.png";
import "./style.css";
export default function Offers() {
  return (
    <div className="Offer-section">
      <div className="card-items-offers">
        <p>45% OFF</p>
        <p>
          subtle
          <span>grin</span>
        </p>
        <p>13 jul to 13 Aug</p>
      </div>
      <div>
        <img className="bg-image" src={offerBg} alt="" />
      </div>
      <div className="card-items-description">
        <p>Limited-Time Discounts</p>
        <p>Summer Sale</p>
        <p>
          "Experience incredible savings with our exclusive offer: Enjoy a
          generous 20% discount on all products! This special discount is
          available for a limited time only, running from Friday, July 12th
          through Sunday, July 14th. Don't miss your chance to save on our
          top-quality items. Whether you're stocking up on essentials or
          treating yourself to something special, now is the perfect time to
          shop. Hurry in and take advantage of this limited-time offer before it
          expires!"
        </p>
        <a href="https://www.razer.com/eu-en/gaming-laptops/razer-blade-14?utm_source=google&utm_medium=google-shopping&utm_campaign=240701_RS_SYS_MID_NL_EGR-systems_TR&CID=240701_RS_SYS_MID_NL_EGR-systems_TR&gad_source=1&gclid=Cj0KCQjwv7O0BhDwARIsAC0sjWNQq202TM7sdV1dags9kBQxgWqkwnxqyM1NUMshKeKfoNXb6Ye_bZIaAs3UEALw_wcB">
          SHOP NOW
        </a>
      </div>
    </div>
  );
}
