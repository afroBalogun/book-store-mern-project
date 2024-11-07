import React, { useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate()

    function toggleNav() {
        setShowNav(prev => !prev);
    }

    const navigation = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Orders", href: "/order" },
        { name: "Cart Page", href: "/cart" },
        { name: "Check Out", href: "/checkout" },
    ];

    async function handleLogOut() {
        await logout();
        setShowNav(false); 
        navigate('/')
    }

    return (
        <nav className='w-full h-20 flex items-end justify-between py-6 px-[20px] md:px-10 lg:px-20 xl:px-[100px]'>
            <div className="logo-and-searchbar flex text-secondary justify-between">
                <Link to='/'>
                    <RiMenu2Fill size='24' />
                </Link>
                <form action="" className='flex items-center'>
                    <IoIosSearch className='relative left-[45px] hover:cursor-pointer' />
                    <input 
                        type="text" 
                        placeholder="What are you looking for?" 
                        className='px-[60px] py-[7px] text-xs bg-[#EAEAEA] rounded-lg' 
                    />
                </form>
            </div>

            <div className="nav-items w-auto gap-5 text-secondary items-center flex">
                {currentUser ? 
                    <img 
                        src="static/assets/avatar.png" 
                        alt="user" 
                        className='hover:cursor-pointer border-2 rounded-2xl border-blue-600' 
                        onClick={toggleNav}
                    /> : 
                    <Link to="/Login">
                        <CiUser size='24' />
                    </Link> 
                } 
                
                <MdFavoriteBorder size='24' className='hidden sm:block' />

                <Link to="/cart">
                    <button className='flex gap-3 bg-primary text-BGtext items-center py-2 px-2 text-sm rounded-lg lg:px-4'>
                        <HiOutlineShoppingCart size={16} />
                        <p className='hidden pr-4 font-extrabold lg:block'>
                            {cartItems.length > 0 ? cartItems.length : "Basket"}
                        </p>
                    </button>
                </Link>
            </div>

            {showNav && (
                <div className='absolute right-0 top-[60px] w-48 bg-white shadow-lg rounded-md z-40 mr-[20px] md:mr-10 lg:mr-20 xl:mr-[100px]'>
                    <ul className='py-2'>
                        {navigation.map(navItem => (
                            <li key={navItem.name}>
                                <Link 
                                    className="block px-4 py-2 text-sm hover:bg-gray-100" 
                                    to={navItem.href}
                                    onClick={() => setShowNav(false)} // Close dropdown on navigation
                                >
                                    {navItem.name}
                                </Link>
                            </li>
                        ))}
                        <button 
                            className="w-full block px-4 py-2 text-sm hover:bg-gray-100 text-left" 
                            onClick={handleLogOut}
                        >
                            Log out
                        </button>
                    </ul>
                </div>
            )}
        </nav>
    );
}
