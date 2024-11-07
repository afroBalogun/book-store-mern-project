import React from "react";
import { useRef, useState, useEffect } from 'react';
import BookCard from "../../components/BookCard";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '../../index.css';
import { Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from "../../redux/features/books/booksAPI";


export default function Recommended(props){    

  const { data: books = [] } = useFetchAllBooksQuery();


    const recommendedBooks = books.filter( book => book.trending === true)
    // console.log(recommendedBooks)

    const recommendedBooksCard = recommendedBooks.length > 0 && recommendedBooks.map( (recommendedBook, index) =>{
        return(
            <SwiperSlide key={index}>
                <BookCard
                book = {recommendedBook}
            />
            </SwiperSlide>
            
        )}
    )
    return(
        <div className="font-primary ">
            <h2 className="text-3xl font-semibold mb-6">
                Recommended for you
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
                  1280: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {recommendedBooksCard}
            </Swiper>
        </div>
    )
}