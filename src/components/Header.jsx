import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLapTop] = useState(false);
  return (
    <div className="header">
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
      <div className="register-cta">
        <Link to="/register">
          <button>ورود / ثبت نام</button>
        </Link>
      </div>
    </div>
  );
};
