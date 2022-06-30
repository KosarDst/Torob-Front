import React, { useState, useEffect } from "react";
import "../assets/css/Home.css";
import { Header } from "./Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { allProduct, loadAllProducts, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux/es/exports";
import axios from "axios";

const Home = () => {
  const allProducts = useSelector(allProduct);
  const [allProd, setAllProd] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    let hasData = false;
    if (!hasData) {
      setAllProd(allProducts);
    }
    return () => {
      hasData = true;
    };
  }, [allProd]);
  const filterProducts = allProd.filter((prod) => {
    return prod.name.toLowerCase().includes(searchKey);
  });

  return (
    <div className="home">
      <Header />
      <div className="search-content">
        <div className="content-header">
          <span className="head-title">
            <h1>ترب</h1>
            <p>موتور جست و جوی هوشمند خرید</p>
          </span>
          <span className="head-logo">
            <img src="https://torob.com/static/images/torob_logo.svg" />
          </span>
        </div>
        <div className="search-engine">
          <input
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
            name="searchKey"
            placeholder="نام کالا را وارد کنید"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
          <ul
            className={`result-list ${searchKey ? "show-result-list" : null}`}
          >
            {filterProducts.map((result) => {
              return <li key={result.name}>{result.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
