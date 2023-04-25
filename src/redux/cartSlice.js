import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { product, quantity } = action.payload;
      state.quantity += quantity;
      state.products.push(product);
    },
  },
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
