import React, { useState } from "react";
import "../assets/css/UserProfile.css";
import { Link } from "react-router-dom";
import "../assets/css/PageHeader.css";
import ResultCard from "./ResultCard";

const UserProfile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLapTop] = useState(false);
  const [isProfDrop, setIsProfDrop] = useState(false);
  return (
    <div className="user-profile">
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
          <div className="register-cta main-cta prof-cta">
            <button
              onClick={() => {
                setIsProfDrop(!isProfDrop);
              }}
            >
              پروفایل
            </button>
            <ul
              className={`profile-menu-drop ${
                isProfDrop ? "open-prof-drop" : null
              }`}
            >
              <li className="pro-drop-item">محبوب ها</li>
              <li className="pro-drop-item">خروج</li>
            </ul>
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
      {/*  */}
      <div className="profile-body">
        <section className="fav-cards">
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </section>
        <section className="side-panel">
          <div className="panel-items">
            <div className="panel-item1">
              <h3>محبوب ها</h3>
              <i className={`fa-regular fa-heart`}></i>
            </div>
            <div className="panel-item">
              <h3>تماس با ما</h3>
            </div>
            <div className="panel-item">
              <h3>درباره ترب</h3>
            </div>
            <div className="split-panel-line"></div>
            <div className="panel-item">
              <h3>خروج از حساب</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
