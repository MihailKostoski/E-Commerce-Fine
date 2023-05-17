import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    favorite: [],
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
        state.total += newProduct.price * newProduct.quantity;
      }
    },

    addFavorite: (state, action) => {
      const { heart, click } = action.payload;
      const existingProductIndex = state.favorite?.findIndex(
        (product) => product._id === heart._id
      );
      if (click === "add") {
        if (existingProductIndex >= 0) {
          alert(
            `This item with ${heart.title} 
             is already in your cart.`
          );
          return;
        } else {
          state.favorite.push(heart);
        }
      } else if (click === "remove") {
        const index = state.favorite.indexOf(heart);

        state.favorite.splice(index, 1);
      }
    },
    handleQuantityClickRedux: (state, action) => {
      const { product, click } = action.payload;
      const productIndex = state.products?.findIndex((pro) => {
        return pro.cartId === product.cartId;
      });
      const quant = state.products[productIndex].quantity;
      const prodPric = state.products[productIndex].price;

      if (click === "PLUS") {
        state.products[productIndex] = {
          ...product,
          quantity: quant + 1,
          price: prodPric / quant + prodPric,
        };
      } else if (quant > 1 && click === "MINUS") {
        let minusPrice = prodPric / quant - prodPric;
        let absolutePrice = Math.abs(minusPrice);

        state.products[productIndex] = {
          ...product,
          quantity: quant - 1,
          price: absolutePrice,
        };
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
    removeFromCart: (state, action) => {
      const index = state.products.indexOf(action.payload);
      state.quantity -= 1;
      state.products.splice(index, 1);
    },

    // clearCart: (state, action) => {
    //   state.products;
    // },
  },
});

export const {
  addProduct,
  handleQuantityClickRedux,
  removeFromCart,
  addFavorite,
  handleColorClickRedux,
  handleSizeClickRedux,
} = cartSlice.actions;
export default cartSlice.reducer;
