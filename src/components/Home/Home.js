import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
////////////////

import "./Home.css";
import Header from "../Header/Header";

import { useLoaderData } from "react-router-dom";
import BannerInfo from "../BannerInfo/BannerInfo";

const Home = () => {
  const getApt = useLoaderData();
  console.log(getApt[0]);

  return (
    <div className="home-parent-div">
      <Header></Header>
      <div className="home-grid-div">
        <div>
          <h1 className="head-cox text-white">Cox's bazar</h1>
          <p className="paragraph-p text-white">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <button className="booking-btn">Booking</button>
        </div>
        <div className="cart-grid ">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={10}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="contain-div ">
              <img className="photo" src={getApt[0].img} alt="" />
              <p className="name-p ">{getApt[0].name}</p>
            </SwiperSlide>
            <SwiperSlide className="contain-div">
              <img className="photo" src={getApt[1].img} alt="" />
              <p className="name-p ">{getApt[1].name} </p>
            </SwiperSlide>
            <SwiperSlide className="contain-div">
              <img className="photo" src={getApt[2].img} alt="" />
              <p className="name-p ">{getApt[2].name}</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
