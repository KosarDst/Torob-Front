import { configureStore } from "@reduxjs/toolkit";
//import rootReducer from "./rootReducer";
import userReducer from "../features/userSlice";
//import { composeWithDevTools } from "redux-devtools-extension";

//const store = createStore(rootReducer, composeWithDevTools());

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
