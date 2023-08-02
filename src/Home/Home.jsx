import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation,Pagination,Autoplay, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { useEffect, useRef } from 'react';
import img1 from "../images/slider1.jpg"
import img2 from "../images/slider2.jpg"
import img3 from "../images/slider3.jpg"
import './home.css'

function Home() {
    return (
        <>
            <section className="home" id="home">
                <div className="swiper-container">
                    <Swiper
         

                        modules={[Navigation, Pagination, Autoplay,A11y ]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2800,
                            disableOnInteraction: false,
                        }}
                        // navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className="slide-element">
                                <img src={img1} alt="" />
                                <div className="content">
                                    <span>upto 75% off</span>
                                    <h3>plant big sale special offer</h3>
                                    <a href="#" className="slide-btn">shop now</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-element">
                                <img src={img2} alt="" />
                                <div className="content">
                                    <span>upto 45% off</span>
                                    <h3>plant make people happy</h3>
                                    <a href="#" className="slide-btn">shop now</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-element">
                                <img src={img3} alt="" />
                                <div className="content">
                                    <span>upto 65% off</span>
                                    <h3>decorate your home now</h3>
                                    <a href="#" className="slide-btn">shop now</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
export default Home;
