import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/PageHeader.css";

const PageHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLapTop] = useState(false);
  return (
    <div className="header-container">
      <div className="main-content">
        <div className="main-intro">
          <span className="header-logo">
            <img src="https://torob.com/static/images/logo_original.png" />
          </span>
          <h1>ترب</h1>
          <div className="search-box">
            <input type="text" placeholder="نام کالا را وارد کنید" />
            <span className="icon-box">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        <div className="register-cta main-cta">
          <Link to="/register">
            <button>ورود / ثبت نام</button>
          </Link>
        </div>
      </div>
      <div className="menu">
        <span className="menu-title mobile-title">
          <h3
            onClick={() => {
              if (isLaptop) {
                setIsLapTop(false);
              }
              setIsMobile(!isMobile);
            }}
          >
            موبایل و تبلت
          </h3>
          <ul className={`list-item ${isMobile ? "mobile" : null}`}>
            <Link to="searchresults">
              <p>موبایل و تبلت</p>
            </Link>
            <h3>موبایل</h3>
            <li className="item">گوشی سامسونگ</li>
            <li className="item">گوشی شیائومی</li>
            <li className="item">گوشی اپل</li>
            <h3>تبلت</h3>
            <li className="item">تبلت سامسونک</li>
            <li className="item">تبلت شیائومی</li>
            <li className="item">تبلت اپل</li>
          </ul>
        </span>
        <span className="menu-title laptop-title">
          <h3
            onClick={() => {
              if (isMobile) {
                setIsMobile(false);
              }
              setIsLapTop(!isLaptop);
            }}
          >
            لپ تاپ کامپیوتر اداری
          </h3>
          <ul className={`list-item ${isLaptop ? "laptop" : null}`}>
            <p>لپ تاپ کامپیوتر اداری</p>
            <h3>لپتاپ</h3>
            <li className="item">لپتاپ لنوو</li>
            <li className="item">لپتاپ ایسوس</li>
            <li className="item">لپتاپ اپل</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default PageHeader;
