import React from "react";
import { useRef, useState, useEffect } from 'react';
import BookCard from "../../components/BookCard";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '../../index.css';
import { Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";



const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]



export default function TopSellers(props){
    
    const [selectedCategory, setSelectedCategory] = useState('Choose a genre')

    const { data: books = [], isLoading, isError } = useFetchAllBooksQuery();
// console.log({ books, isLoading, isError });

    

    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(
        book => book.category === selectedCategory.toLowerCase()
    )
    // console.log(filteredBooks)

    const filteredBooksCard = filteredBooks.length > 0 && filteredBooks.map( (filteredBook, index) =>{
        return(
            <SwiperSlide key={index}>
                <BookCard
                book = {filteredBook}
            />
            </SwiperSlide>
            
        )}
    )

    
    return(
        <div className="font-primary ">
            <h2 className="text-3xl font-semibold mb-6">
                Top Sellers
            </h2>

            <select name="category" id = "category" onChange={(e) => setSelectedCategory(e.target.value)}
                className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none mb-6"

            >


                {
                    categories.map( (category, index) =>{
                        return <option key={index} value={category}>{category}</option>
                    })
                }


            </select>
            
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
                {filteredBooksCard}
            </Swiper>
            

            
        </div>
    )
}