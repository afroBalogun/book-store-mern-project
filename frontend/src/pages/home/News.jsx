import React from "react";
import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '../../index.css';
import { Navigation } from 'swiper/modules';

export default function News(props){
    const news = props.news.map( (newsData, index) => {
        return (
            <SwiperSlide key={index} >
                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12">
                    <img src={`/static/assets/news/${newsData.image}.png`} alt="" />
                    <div className=" py-4 ">
                        <Link to = "/">
                            <h2 className="text-lg font-medium hover:text-blue-600 mb-4">
                                {newsData.title}
                            </h2>
                        </Link>

                        <p className="text-sm text-gray-600">
                            {newsData.description}
                        </p>
                    </div>
                </div>
                
            </SwiperSlide>
        )
    })

    // console.log(news)

    return(
        <div className="news font-primary">
            <h2 className="text-3xl font-semibold mb-6">
                News
            </h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation = {true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {news}
            </Swiper>
        </div>
    )
}