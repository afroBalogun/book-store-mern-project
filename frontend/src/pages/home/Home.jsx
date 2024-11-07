import React from "react";
import { useRef, useState, useEffect } from 'react';
import Hero from "./Hero";
import TopSellers from "./TopSellers";
import Recommended from "./Recommended";
import News from "./News";
import newsLib from "../../../data/news";

export default function Home(){

    const [news, setNews] = useState(newsLib)



    // console.log(news)

    return(
        <div className="flex flex-col gap-10 px-[20px] 
            md:px-10
            lg:px-20
            xl:px-[100px]">
            <Hero/>
            <TopSellers 
                
            />
            <Recommended 
                
            />
            <News 
                news = {news}
                setNews = {setNews}
            />
        </div>
    )
}