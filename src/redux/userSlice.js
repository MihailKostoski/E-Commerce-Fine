import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    timestamp: null,
    logoutTimeout: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.timestamp = Date.now();
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutAutomaticly: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
      state.timestamp = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
      state.timestamp = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
