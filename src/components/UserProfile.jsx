import React, { useState, useEffect } from "react";
import "../assets/css/UserProfile.css";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/PageHeader.css";
import ResultCard from "./ResultCard";
import { useDispatch, useSelector } from "react-redux";
import { allProduct, selectUser, signout } from "../features/userSlice";
import axios from "axios";

const UserProfile = () => {
  const allProducts = useSelector(allProduct);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  let navigate = useNavigate();

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
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLapTop] = useState(false);
  const [isProfDrop, setIsProfDrop] = useState(false);
  const [isSidePanel, setIsSidePanel] = useState(false);
  const [shops, setShops] = useState([]);
  const [shopName, setShopName] = useState("");
  const [allProd, setAllProd] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [userProd, setUserProd] = useState([
    {
      id: 3,
      title:
        "گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا Apple iPhone 13 Pro max (Not Active) 256 G",
      img: "https://image.alldigitall.ir/thumb/catalog/Products-Pic/Mobile/382460/main-1.jpg-628x628.png",
      name: "samsung",
      shopNumber: 124,
      price: 500,
      url: "https://google.com",
    },
    {
      id: 4,
      title:
        "گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا Apple iPhone 13 Pro max (Not Active) 256 G",
      img: "https://image.alldigitall.ir/thumb/catalog/Products-Pic/Mobile/382460/main-1.jpg-628x628.png",
      name: "samsung",
      shopNumber: 14,
      price: 800,
      url: "https://google.com",
    },
  ]);
  /*  */
  useEffect(() => {
    let hasData = false;
    if (!hasData) {
      setAllProd(allProducts);
      axios
        .get("http://lcoalhost:8000/api/v0/post/page/post1")
        .then((info) => {
          setUserProd(info);
        })
        .catch((err) => err);
      /* get shops */
      axios.get("http://lcoalhost:8000/api/v0/shop").then((info) => {
        setShops(info);
      });
    }
    return () => {
      hasData = true;
    };
  }, []);
  /* handle  signout proccess */
  const handleSignout = () => {
    dispatch(signout());
    axios.get("http://lcoalhost:8000/api/v0/auth/signout");
    navigate("/");
  };
  const filterProducts = allProd.filter((prod) => {
    return prod.name.toLowerCase().includes(searchKey);
  });
  /*  */
  const handleAddShop = (e) => {
    const { name } = e.target;
    axios.post("http://lcoalhost:8000/api/v0/shop").then((info) => {
      setShops(info);
    });
    setShops((prevValue) => {
      return [...prevValue, name];
    });
    setShopName("");
  };
  console.log(shops);

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
              <input
                onChange={(e) => setSearchKey(e.target.value)}
                type="text"
                placeholder="نام کالا را وارد کنید"
              />
              <span className="icon-box">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <ul
                className={`header-list ${
                  searchKey ? "show-header-list" : null
                }`}
              >
                {filterProducts.map((result) => {
                  return <li key={result.name}>{result.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="register-cta main-cta prof-cta">
            <i
              className={`fa-solid handle-side-panel ${
                isSidePanel ? "fa-xmark" : "fa-bars"
              }`}
              onClick={() => {
                setIsSidePanel(!isSidePanel);
              }}
            ></i>
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
              <li
                onClick={() => navigate("/userprofile")}
                className="pro-drop-item"
              >
                محبوب ها
              </li>
              <li onClick={handleSignout} className="pro-drop-item">
                خروج
              </li>
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
      {/*  */}
      <div className="profile-body">
        <section className="fav-cards">
          {userProd.map((prod) => {
            return (
              <ResultCard key={prod.id} cardData={prod} favStatus="true" />
            );
          })}
        </section>
        <section className={`side-panel ${isSidePanel ? "open-side" : null}`}>
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
            <div onClick={handleSignout} className="panel-item">
              <h3>خروج از حساب</h3>
            </div>
            <div className="split-panel-line"></div>
          </div>
          <section className="shops">
            <h1>فروشگاه های من</h1>
            <div className="shop-setting">
              <input
                type="text"
                name="shopName"
                placeholder="نام فروشگاه"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
              />
              <button name={shopName} onClick={handleAddShop}>
                افزودن
              </button>
            </div>
            <div className="shop-container">
              {shops.map((shop) => {
                return (
                  <div key={shop} className="shop">
                    <h3>{shop}</h3>
                  </div>
                );
              })}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
