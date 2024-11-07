import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
    const [message, setMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, signInWithGoogle } = useAuth();
    const navigate = useNavigate(); // <-- Import and define navigate

    const onSubmit = async (data) => {
        try {
            await registerUser(data.email, data.password);
            alert("User registered successfully!");
            navigate("/");
        } catch (error) {
            if (data.password.length < 6) {
                setPasswordMessage('Password must be at least 6 characters long');
            }
            setMessage("Please provide a valid email and password");
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login Successful");
            navigate("/");
        } catch (error) {
            alert("Failed to sign in with Google account!");
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen max-w-screen-2xl mx-auto px-4 font-primary">
            <div className="h-[calc(100vh-120px)] flex items-center justify-center">
                <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Please Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email and Password Fields */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input
                                {...register("email", { required: true })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" name="email"/>
                        </div>

                        <div className="mb-6">         
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input 
                                 {...register("password", { required: true })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" name="password"/>
                        </div>
                        {message && <p className="text-red-500 text-xs font-semibold italic mb-3">{message}</p>}
                        {passwordMessage && <p className="text-red-500 text-xs italic mb-3">{passwordMessage}</p>}
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Sign Up
                        </button>
                    </form>

                    <p className="inline-block align-baseline font-medium mt-4 text-sm">
                        Have an account? 
                        <Link className="text-blue-500 hover:text-blue-800" to="/Login"> <span> Login</span></Link>
                    </p>

                    <div className="mt-4">
                        <button 
                            onClick={handleGoogleSignIn} // Corrected Google sign-in function
                            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <FaGoogle className="mr-2"/>
                             Sign in with Google
                        </button>
                    </div>

                    <p className="mt-5 text-center text-gray-500 text-xs">©2025 Book Store. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
