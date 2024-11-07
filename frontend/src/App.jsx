import React from "react";
import { useState } from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import bookData from "../data/blog.json"
import Footer from "./components/Footer";
import AuthProvider from "./context/AuthContext";



export default function App() {
        


    return (
        <div className="w-full h-full  flex flex-col gap-10
            
        ">
            <AuthProvider>
                <Navbar 
                    className=" px-[20px] 
                    md:px-10
                    lg:px-20
                    xl:px-[100px]
                "/>
                <main className="">
                    <Outlet />
                </main>

                <Footer/>
            </AuthProvider>
            
        </div>
      
    )
  }