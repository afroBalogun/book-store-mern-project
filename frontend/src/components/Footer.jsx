import React from "react";
import { FaFacebook } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Footer(){
    return(
        <div className="bg-gray-900 text-white py-10 px-[20px] 
            md:px-10
            lg:px-20
            xl:px-[100px]">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2 w-full">
                        <img src="static/assets/footer-logo.png" alt="Logo" className="mb-5 w-36"/>
                        <ul className="flex flex-col md:flex-row gap-4">
                            <li>
                                <a href="#home" className="hover:text-primary">Home</a></li>
                            <li>
                                <a href="#services" className="hover:text-primary">Services</a>
                                </li>
                            <li>
                                <a href="#about" className="hover:text-primary">About Us</a>
                            </li>
                            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <p className="mb-4">
                            Subscribe to our newsletter to receive the latest updates, news, and offers!
                        </p>
                        <div className="flex">
                            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-l-md text-black"/>
                            <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
                    <ul className="flex gap-6 mb-4 md:mb-0">
                        <li>
                        <a href="#privacy" className="hover:text-primary">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#terms" className="hover:text-primary">
                            Terms of Service
                            </a>
                        </li>
                    </ul>
                    <div className="flex gap-6">
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                            <FaFacebook size={24}/>
                        </Link>
                        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                            <SlSocialTwitter size={24}/>
                        </Link>
                        <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                            <FaInstagram size={24}/>
                        </Link>
                    </div>
                </div>
        </div>
    )
}