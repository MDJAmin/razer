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
          <div className="">
            <a href="https://github.com/MDJAmin/razer.git">
              {" "}
              <img src={Offers} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <a href="https://github.com/MDJAmin/razer.git">
              {" "}
              <img src={Offers1} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <a href="https://github.com/MDJAmin/razer.git">
              {" "}
              <img src={Offers2} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <a href="https://github.com/MDJAmin/razer.git">
              {" "}
              <img src={Offers3} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <a href="https://github.com/MDJAmin/razer.git">
              {" "}
              <img src={Offers4} alt="" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
