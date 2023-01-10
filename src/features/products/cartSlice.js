import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existedItemIndex >= 0) {
        state.cartItems[existedItemIndex].cartQuantity += 1;
      } else {
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;
      //update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart(state, acion) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      //if exist
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = updatedCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
