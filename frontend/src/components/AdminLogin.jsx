import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"
import getBaseUrl from '../utils/baseURL';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async(data) =>{ 
        console.log(data)
        try {
            const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',  
                },
                
            });
            const auth = response.data;
            console.log(auth);
            
            if(auth.token) {
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token')
                    alert('Token has expired, PLease Login again.')
                    navigate("/")
                }, 3600 * 1000
                )
                alert("Admin Login Successful!")
                navigate("/dashboard")
            }
        } catch (error) {
            setMessage("Please provide valid credentials")
        }
    };
  return (
    <div className="min-h-screen max-w-screen-2xl px-4 font-primary mx-auto">
        <div className=" h-screen flex items-center justify-center">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4">
                    Admin Dashboard Login
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input 
                            {...register("username", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name="username"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input 
                            {...register("password", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" name="password"/>
                    </div>
                    {
                        message && <p className="text-red-500 text-xs italic mb-3">{message}</p>
                    }
                    <div className="flex flex-wrap space-y-2.5 items-center justify-between">
                        <button 
                            onClick={handleSubmit}
                            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                    </div>
                </form>



                

                <p className="mt-5 text-center text-gray-500 text-xs">©2025 Book Store. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}
