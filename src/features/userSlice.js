import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
      isLogged: true,
    },
    products: [{ name: "سامسونگ" }, { name: "اپل" }],
    favs: [],
    currentItem: null,
  },
  reducers: {
    signup: (state, action) => {
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("email", action.payload.email);
      state.user = {
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        isLogged: true,
      };
      loadCurrUser(action.payload);
    },
    signin: (state, action) => {
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("email", action.payload.email);
      state.user = {
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        isLogged: true,
      };
      loadCurrUser(action.payload);
    },
    signout: (state) => {
      state.user = {
        username: null,
        email: null,
        isLogged: false,
      };
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
export const loadCurrUser = (user) => {
  localStorage.setItem("userDetail", JSON.stringify(user));
  let currenUser = localStorage.getItem("userDetail");
  axios
    .get("http://localhost:8000/api/v0/auth/signin", currenUser)
    .then((info) => {
      return info;
    });
};

export default userSlice.reducer;
