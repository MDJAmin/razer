// import React from "react";
// import offerBg from "../../assets/Offers.png";
// import "./style.css";
// export default function Offers() {
//   return (
//     <div className="Offer-section">
//       <div>
//         <img className="bg-image" src={offerBg} alt="" />
//       </div>
//       <div className="card-items-description">
//         <a href="https://www.razer.com/eu-en/gaming-laptops/razer-blade-14?utm_source=google&utm_medium=google-shopping&utm_campaign=240701_RS_SYS_MID_NL_EGR-systems_TR&CID=240701_RS_SYS_MID_NL_EGR-systems_TR&gad_source=1&gclid=Cj0KCQjwv7O0BhDwARIsAC0sjWNQq202TM7sdV1dags9kBQxgWqkwnxqyM1NUMshKeKfoNXb6Ye_bZIaAs3UEALw_wcB">
//           SHOP NOW
//         </a>
//       </div>
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Offers, Offers1, Offers2, Offers3, Offers4 } from "./index";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="firstEl">
            <a href="https://www.razer.com/eu-en/gaming-headsets/Razer-Kraken-Kitty-V2/RZ04-04730200-R3M1">
              {" "}
              <img src={Offers} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <a href="https://www.razer.com/eu-en/gaming-headsets/Razer-Kraken-Kitty-V2/RZ04-04730200-R3M1">
              {" "}
              <img src={Offers1} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <a href="https://www.razer.com/eu-en/gaming-headsets/Razer-Kraken-Kitty-V2/RZ04-04730200-R3M1">
              {" "}
              <img src={Offers2} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <a href="https://www.razer.com/eu-en/gaming-headsets/Razer-Kraken-Kitty-V2/RZ04-04730200-R3M1">
              {" "}
              <img src={Offers3} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <a href="https://www.razer.com/eu-en/gaming-headsets/Razer-Kraken-Kitty-V2/RZ04-04730200-R3M1">
              {" "}
              <img src={Offers4} alt="" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
