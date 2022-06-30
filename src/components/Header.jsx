import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLapTop] = useState(false);
  /* category menu */
  const mobile = [
    {
      id: 1,
      name: "گوشی سامسونگ",
      category: {
        categ: "mobile",
        catName: "samsung",
      },
    },
    {
      id: 2,
      name: "گوشی شیائومی",
      category: {
        categ: "mobile",
        catName: "xiaomi",
      },
    },
    {
      id: 3,
      name: "گوشی اپل",
      category: {
        categ: "mobile",
        catName: "apple",
      },
    },
  ];
  const tablet = [
    {
      id: 4,
      name: "تبلت سامسونگ",
      category: {
        categ: "tablet",
        catName: "samsung",
      },
    },
    {
      id: 5,
      name: "تبلت شیائومی",
      category: {
        categ: "tablet",
        catName: "xiaomi",
      },
    },
    {
      id: 6,
      name: "تبلت اپل",
      category: {
        categ: "tablet",
        catName: "apple",
      },
    },
  ];
  const laptop = [
    {
      id: 7,
      name: "لپتاپ لنوو",
      category: {
        categ: "laptop",
        catName: "lenovo",
      },
    },
    {
      id: 8,
      name: "لپتاپ ایسوس",
      category: {
        categ: "laptop",
        catName: "asus",
      },
    },
    {
      id: 9,
      name: "لپتاپ اپل",
      category: {
        categ: "laptop",
        catName: "apple",
      },
    },
  ];
  /*  */

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
            <Link to="searchresults/mobiletablet">
              <p>موبایل و تبلت</p>
            </Link>
            <Link to="searchresults/mobile">
              <h3 name="mobile">موبایل</h3>
            </Link>
            {mobile.map((phone) => {
              return (
                <Link
                  to={`searchresults/${phone.category.categ}/${phone.category.catName}`}
                >
                  <li
                    key={phone.id}
                    name={phone.category.catName}
                    className="item"
                  >
                    {phone.name}
                  </li>
                </Link>
              );
            })}
            <Link to="searchresults/tablet">
              <h3 name="tablet">تبلت</h3>
            </Link>
            {tablet.map((tab) => {
              return (
                <Link
                  to={`searchresults/${tab.category.categ}/${tab.category.catName}`}
                >
                  <li key={tab.id} className="item">
                    {tab.name}
                  </li>
                </Link>
              );
            })}
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
            <Link to="searchresults/laptop">
              <p>لپ تاپ کامپیوتر اداری</p>

              <h3 name="laptop">لپتاپ</h3>
            </Link>
            {laptop.map((lab) => {
              return (
                <Link
                  to={`searchresults/${lab.category.categ}/${lab.category.catName}`}
                >
                  <li key={lab.id} className="item">
                    {lab.name}
                  </li>
                </Link>
              );
            })}
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
