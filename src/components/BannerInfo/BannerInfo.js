import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const BannerInfo = ({ getApi }) => {
  console.log(getApi);

  return (
    <div className="banner-parent-div">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <Swiper>
          <SwiperSlide>
            <img src="" alt="" />
            <p></p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="" alt="" />
            <p></p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="" alt="" />
            <p></p>
          </SwiperSlide>
        </Swiper>
      </Swiper>
    </div>
  );
};

export default BannerInfo;
