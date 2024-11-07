import React from "react";
import { useSelector } from "react-redux";
import getImgUrl from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/features/cart/cartSlice";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import { totalPrice } from "../../redux/features/cart/cartSlice";
import { useAuth } from "../../context/AuthContext";

export default function Cart(props){

    const dispatch = useDispatch()

    function handleClearCart(){
        dispatch(clearCart())
    }

    function handleRemoveFromCart(product) {
      dispatch(removeFromCart(product))
    }

    const cartItems = useSelector(state => state.cart.cartItems)
    const sumPrice = useSelector(totalPrice);
    const shoppingCartItems = cartItems.map( cartItem => {
        return(
            <li key={cartItem.id} className="flex h-36 py-5 justify-between text-base font-medium text-gray-900 border-b-[1px] 

">
                <div className="cart-item-info flex  gap-5  ">
                    <div className=" w-28 h-full overflow-hidden rounded-lg">
                        <img src={getImgUrl(cartItem.coverImage)} alt="" 
                            className=""
                        />
                    </div>
                    
                    <div className="h-full flex flex-col justify-between">
                        <h3>
                            {cartItem.title}
                        </h3>
                        <p className="-mt-14 text-sm text-gray-500 capitalize">
                            <span className="font-bold">Category:</span> {cartItem.category}
                        </p>
                        <p className="-mt-7 text-sm text-gray-500 capitalize">
                            <span className="font-bold">Qty:</span> 1
                        </p>
                    </div>

                    
                    
                </div>

                <div className="flex flex-col justify-between ">
                        <p>
                            ${cartItem.newPrice}
                        </p>

                        <button 
                            onClick={() => handleRemoveFromCart(cartItem)}

                            className="font-medium text-indigo-600 hover:text-indigo-500y text-sm">
                            Remove
                        </button>
                    </div>
            </li>
        )
    })
    
    return(
        <div className="min-h-screen max-w-screen-2xl mx-auto  py-6 font-primary px-[20px] 
            md:px-10
            lg:px-20
            xl:px-[100px]">
            <div className="flex mt-1 h-full flex-col overflow-hidden bg-white shadow-xl py-6">
                <div className="flex-1 overflow-y-auto px-4  sm:px-6">
                    <div className="flex items-start justify-between ">
                        <div class="text-lg font-medium text-gray-900 ">
                            Shopping cart
                        </div>

                        <div class="ml-3 flex h-10 items-center ">
                        <button
                          type="button"
                          onClick={handleClearCart}
                          className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200  "
                        >
                          <span className="">Clear Cart</span>
                        </button>
                        </div>
                    </div>

                    <ul>
                        {cartItems.length > 0 ? shoppingCartItems : <p className=" py-6">No products found</p>}
                    </ul>
                    
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6 -mt-[1px]">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${sumPrice.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                    <Link
                        to= "/checkout" 
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <Link to="/">
                        or 
                        <button
                          type="button"

                          className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}