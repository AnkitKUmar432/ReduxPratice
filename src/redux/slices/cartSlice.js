
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      state.push(action.payload);
    },
    // Remove an item by its unique ID
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // Clear all items from the cart
    clearCart: () => [],
  },
});

// Selector to get all items in the cart
export const getItemsSelector = (state) => state.cart;

// Export actions and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



// import { createSlice} from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "Cart",
//   initialState: [],
//   reducers: {
//     addItem: (state, action) => {
//       state.push(action.payload);
//     },
//     removeItem:(state, action)=>{
//      return state.filter((item)=> item !== action.payload )
//     },
//     clearCart: () => [],
//   },
// });

// // export const getItemsSelector = createSelector(
// //   (state) => state.cart,
// //   (state) => state
// // );
// export const getItemsSelector = ( state)  => state.cart;

// export const { addItem,removeItem,clearCart} = cartSlice.actions;

// export default cartSlice.reducer;


// import { createSlice, createSelector } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addItem: (state, action) => {
//       state.push(action.payload);
//     },
//     // Example of additional reducers:
//     removeItem: (state, action) => {
//       return state.filter((item, index) => index !== action.payload);
//     },
//     clearCart: () => [],
//   },
// });

// // Simplified selector
// export const selectCartItems = (state) => state.cart;

// // Exporting actions
// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// // Exporting reducer
// export default cartSlice.reducer;
