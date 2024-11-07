import React from "react";

export default function Hero(){
    return(
        <div className="hero flex flex-col gap-10 font-primary justify-between items-center text-secondary 
            md:flex-row-reverse
        ">
            <div className="">
                <img src="static/assets/banner.png" alt="" 
                    className="lg:h-[378px]"
                />
            </div>
            <div className="flex flex-col items-start gap-5">
                <h2 className="text-2xl font-medium 
                    sm:text-4xl
                    md:text-5xl
                ">
                    New Releases This Week
                    </h2>

                <p className="w-[450px] text-sm
                    md:w-[300px]
                    lg:w-[450px]
                ">
                It's time to update your reading list with some of the latest and
                 greatest releases in the literary world. From heart-pumping thrillers to 
                 captivating memoirs, 
                this week's new releases offer something for everyone.
                </p>

                <button className="bg-primary px-[49px] py-[7px] rounded-lg">
                    Subscribe
                </button>
            </div>

            
        </div>
    )
    
}