import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import getImgUrl from "../utils/getImgUrl" 
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

export default function BookCard(props){
  const dispatch = useDispatch()

  function handleAddedToCart(product) {
    dispatch(addToCart(product))
  }

    return(
        <div className=" rounded-lg transition-shadow duration-300">
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4 "
            >
              <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
              <Link to = {`/books/${props.book._id}`}>
                    <img
                          src={getImgUrl(props.book.coverImage)}
                          alt=""
                          className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                    />
                </Link>

              </div>

              <div className=" flex flex-col h-4/5 justify-between">
                <Link to = {`/books/${props.book._id}`}>
                    <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                        {props.book.title}
                    </h3>
                </Link>

                <p className="text-gray-600 mb-5 text-xs">
                    {props.book.description.length > 80 ? `${props.book.description.slice(0, 80)}...` : props.book.description}
                </p>
                <p className="font-medium mb-5">
                {props.book.newPrice} <span className="line-through font-normal ml-2">{props.book.oldPrice}</span>
                </p>
                <button 
                  onClick={() => handleAddedToCart(props.book)}
                  className="btn-primary  space-x-1 flex items-center gap-1 h-10 ">
                  <HiOutlineShoppingCart className="" />
                  <span className="w-[100px]">Add to Cart</span>
                </button>
              </div>
            </div>
        </div>
    )
}