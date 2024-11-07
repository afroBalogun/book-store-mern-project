import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "../redux/features/books/booksAPI";
import getImgUrl from "../utils/getImgUrl"; // Assuming getImgUrl is located here

export default function SingleBook() {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
    const dispatch = useDispatch();

    function handleAddedToCart(product) {
        dispatch(addToCart(product));
    }

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading book details.</p>;

    console.log(book)

    return (
        <div className="px-[20px] md:px-10 lg:px-20 xl:px-[100px]">
            <div className="max-w-lg shadow-md p-5">
                <h1 className="text-2xl font-bold mb-6">
                    {book?.title || "Book Title"}
                </h1>
            
                <div>
                    <div>
                        <img 
                            src={getImgUrl(book?.coverImage)} 
                            alt={book?.title} 
                            className="mb-8" 
                        />
                    </div>

                    <div className="mb-5">
                        <p className="text-gray-700 mb-2">
                            <strong>Author:</strong> {book?.author || "admin"}
                        </p>

                        <p className="text-gray-700 mb-4">
                            <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                        </p>

                        <p className="text-gray-700 mb-4 capitalize">
                            <strong>Category:</strong> {book?.category}
                        </p>

                        <p className="text-gray-700">
                            <strong>Description:</strong> {book?.description}
                        </p>
                    </div>

                    <button 
                        onClick={() => handleAddedToCart(book)}
                        className="btn-primary px-6 space-x-1 flex items-center gap-1"
                    >
                        <HiOutlineShoppingCart />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
