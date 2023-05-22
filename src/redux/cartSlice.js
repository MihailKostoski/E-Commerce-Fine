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
      const existingProductIndex = state.products?.findIndex(
        (product) =>
          product._id === action.payload._id &&
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
        state.total += newProduct.price;
      }
    },

    handleQuantityClickRedux: (state, action) => {
      const { product, click } = action.payload;
      const productIndex = state.products?.findIndex((pro) => {
        return pro.cartId === product.cartId;
      });

      if (productIndex !== -1) {
        const quant = state?.products[productIndex].quantity;
        const prodPric = state?.products[productIndex].price;

        if (click === "PLUS") {
          state.products[productIndex] = {
            ...product,
            quantity: quant + 1,
            price: prodPric / quant + prodPric,
          };
          state.total += prodPric / quant;
        } else if (quant > 1 && click === "MINUS") {
          let minusPrice = prodPric / quant - prodPric;
          let absolutePrice = Math.abs(minusPrice);

          state.products[productIndex] = {
            ...product,
            quantity: quant - 1,
            price: absolutePrice,
          };
          state.total -= prodPric / quant;
        }
      }
    },
    handleColorClickRedux: (state, action) => {
      const { product, color } = action.payload;
      const productIndex = state.products?.findIndex((pro) => {
        return pro.cartId === product.cartId;
      });

      state.products[productIndex] = {
        ...product,
        color: color,
      };
    },
    handleSizeClickRedux: (state, action) => {
      const { product, size } = action.payload;
      const productIndex = state.products?.findIndex((pro) => {
        return pro.cartId === product.cartId;
      });

      state.products[productIndex] = {
        ...product,
        size: size,
      };
    },
    removeFromCartOnMinus: (state, action) => {
      const productIndex = state.products?.findIndex(
        (product) => product.cartId === action.payload.cartId
      );
      const productsPrice = state.products[productIndex].price;
      state.products.splice(productIndex, 1);
      state.quantity -= 1;
      state.total -= productsPrice;
    },

    removeCart: (state) => {
      (state.products = []), (state.total = 0), (state.quantity = 0);
    },
  },
});

export const {
  addProduct,
  handleQuantityClickRedux,
  removeFromCartOnMinus,
  addFavorite,
  handleColorClickRedux,
  handleSizeClickRedux,
  removeCart,
} = cartSlice.actions;
export default cartSlice.reducer;
