import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
    quantityFav: 0,
    totalFav: 0,
  },
  reducers: {
    addFavorite: (state, action) => {
      const { heart, click } = action.payload;

      const existingProductIndex = state.favorite.findIndex(
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
          state.quantityFav += 1;
        }
      } else if (click === "remove" && state.quantityFav > 0) {
        const index = state.favorite.indexOf(heart);

        state.favorite.splice(index, 1);

        state.quantityFav -= 1;
      }
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
