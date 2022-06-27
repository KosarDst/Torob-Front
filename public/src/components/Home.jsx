import React from "react";
import "../assets/css/Home.css";
import { Header } from "./Header";

const Home = () => {
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
          <input type="text" placeholder="نام کالا را وارد کنید" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
