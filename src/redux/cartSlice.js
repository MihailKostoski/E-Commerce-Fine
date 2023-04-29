import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) =>
          parseInt(product.id) === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );
      if (existingProductIndex >= 0) {
        alert(
          `This item with ${action.payload.color} color  and ${action.payload.size}
           is already in your cart.`
        );
      } else {
        const cartId = uuidv4();
        const newProduct = {
          ...action.payload,

          cartId: cartId,
        };
        state.quantity += 1;
        state.products.push(newProduct);
        state.total += newProduct.price * newProduct.quantity;
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
