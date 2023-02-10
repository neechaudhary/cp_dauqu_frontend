import React from "react";
import Carousel from "react-elastic-carousel";
import ss1 from "../assets/images/ss1.png";
import ss2 from "../assets/images/ss2.png";
import ss3 from "../assets/images/ss3.png";
import ss4 from "../assets/images/ss4.png";
import ss5 from "../assets/images/ss5.png";
import ss6 from "../assets/images/ss6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/pagination";
function ImgSlider() {
  
  return (
    <div>
      {/* <Carousel>
        <div className="">
          <img src={ss1} alt="" />
        </div>
        <div className="">
          <img src={ss2} alt="" />
        </div>
        <div className="">
          <img src={ss3} alt="" />
        </div>
        <div className="">
          <img src={ss4} alt="" />
        </div>
        <div className="">
          <img src={ss5} alt="" />
        </div>
        <div className="">
          <img src={ss6} alt="" />
        </div>
      </Carousel> */}
      <Swiper>
        
      </Swiper>
    </div>
  );
}

export default ImgSlider;
