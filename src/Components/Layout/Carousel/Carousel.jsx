import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Pagination } from "swiper/modules";

export const Carousel = ({ children, breakpoints, ...rest }) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
          type: "progressbar",
        }}
        breakpoints={
          breakpoints || {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }
        }
        modules={[Pagination]}
        className="mySwiper"
        {...rest}
      >
        {children?.map((child, index) => {
          return <SwiperSlide key={index}>{child}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};
