import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/PageHeader.css";
import { allProduct } from "../features/userSlice";

const PageHeader = () => {
  let navigate = useNavigate();
  /*  */
  const allProducts = useSelector(allProduct);
  /*  */
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLapTop] = useState(false);
  /*  */
  const [allProd, setAllProd] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  /*  */
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
    <div className="header-container">
      <div className="main-content">
        <div className="main-intro">
          <span className="header-logo">
            <img src="https://torob.com/static/images/logo_original.png" />
          </span>
          <h1>ترب</h1>
          <div className="search-box">
            <input
              onChange={(e) => setSearchKey(e.target.value)}
              type="text"
              placeholder="نام کالا را وارد کنید"
            />
            <span className="icon-box">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <ul
              className={`header-list ${searchKey ? "show-header-list" : null}`}
            >
              {filterProducts.map((result) => {
                return <li key={result.name}>{result.name}</li>;
              })}
            </ul>
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
            <Link to="/searchresults/mobiletablet">
              <p>موبایل و تبلت</p>
            </Link>
            <Link to="/searchresult/mobile">
              <h3 name="mobile">موبایل</h3>
            </Link>
            {mobile.map((phone) => {
              return (
                <Link
                  to={`/searchresults/${phone.category.categ}/${phone.category.catName}`}
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
            <Link to="/searchresults/tablet">
              <h3 name="tablet">تبلت</h3>
            </Link>
            {tablet.map((tab) => {
              return (
                <Link
                  to={`/searchresults/${tab.category.categ}/${tab.category.catName}`}
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
            <Link to="/searchresults/laptop">
              <p>لپ تاپ کامپیوتر اداری</p>

              <h3 name="laptop">لپتاپ</h3>
            </Link>
            {laptop.map((lab) => {
              return (
                <Link
                  to={`/searchresults/${lab.category.categ}/${lab.category.catName}`}
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
    </div>
  );
};

export default PageHeader;
