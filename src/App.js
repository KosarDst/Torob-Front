import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import SearchResults from "./components/SearchResults";
import ProductInfo from "./components/ProductInfo";
import UserProfile from "./components/UserProfile";
import { allProduct, loadAllProducts, selectUser } from "./features/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";

const App = () => {
  const dispatch = useDispatch();
  /* specify user logged in or not */
  const user = useSelector(selectUser);
  const allProducts = useSelector(allProduct);

  /* handle visual height */
  document.documentElement.style.setProperty(
    "--visual-height",
    `${visualViewport.height}px`
  );

  /*  */
  useEffect(() => {
    /* get products and send to redux state */
    let hasData = false;
    if (!hasData) {
      axios
        .get("http://localhost:8000/api/v0/post/list/all?search=post&from_price=0&to_price=50000&ordering=publish_date")
        .then((info) => {
          dispatch(loadAllProducts(info.data.data));
        })
        .catch((err) => err);
    }

    return () => {
      hasData = true;
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/searchresults" element={<SearchResults />}>
          <Route path=":category" element={<SearchResults />} />
        </Route>
        <Route path="productinfo/:id" element={<ProductInfo />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
