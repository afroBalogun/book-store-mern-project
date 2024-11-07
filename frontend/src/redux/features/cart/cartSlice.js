import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const initialState = {
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id)
      if (!existingItem) {
        state.cartItems.push(action.payload)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your item has been added successfully",
          showConfirmButton: false,
          timer: 1500
        });
      } else{
        Swal.fire({
          title: "Already in Cart",
          text: "This item is already in Cart",
          icon: "warning",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "OK!"
        })
      }
  },

  removeFromCart: (state, action) => {
    state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
  },

  clearCart: (state) =>{
    state.cartItems = []
  }
}
})

export const totalPrice = (state) => {
  return state.cart.cartItems.reduce((total, cartItem) => {
    return total + cartItem.newPrice;
  }, 0);
};
 
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer