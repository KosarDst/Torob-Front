import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    products: [{ name: "سامسونگ" }, { name: "اپل" }],
    favs: [],
    currentItem: null,
  },
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
    },
    signin: (state, action) => {
      state.user = action.payload;
    },
    signout: (state) => {
      state.user = null;
    },
    loadAllProducts: (state, action) => {
      state.products = action.payload;
    },
    loadCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});

export const { signup, signin, signout, loadAllProducts, loadCurrentItem } =
  userSlice.actions;

export const selectUser = (state) => state.user.user;
export const allProduct = (state) => state.user.products;

export default userSlice.reducer;
