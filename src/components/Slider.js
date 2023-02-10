import React from "react";

import img1 from "../assets/images/s_s1.png";
import img2 from "../assets/images/s_s2.png";
import img3 from "../assets/images/s_s3.png";
import img4 from "../assets/images/s_s4.png";
import img5 from "../assets/images/s_s5.png";
import img6 from "../assets/images/s_s6.png";
import ss1 from "../assets/images/s_s7.png";
import ss2 from "../assets/images/s_s8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


// import required modules
import { Pagination } from "swiper";
function Slider() {
  SwiperCore.use([Autoplay]);

  return (
    <div className="lg:mt-8 xl:4">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper p-4"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div>
            <img src={ss2} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={ss1} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img1} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img4} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img5} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img6} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Carousel itemsToShow={1} showArrows={true} className="p-4">
       
     
       
        
       

        

        
        
      </Carousel> */}
    </div>
  );
}

export default Slider;
