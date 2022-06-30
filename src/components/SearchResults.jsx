import React, { useState, useEffect } from "react";
import "../assets/css/SearchResults.css";
import PageHeader from "../page/PageHeader";
import ResultCard from "./ResultCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const params = useParams();
  /*  */
  const [priceFilter, setPriceFilter] = useState(false);
  const [dropFilter, setDropFilter] = useState(false);
  const [isSideFilter, setIsSideFilter] = useState(false);
  /*  */
  const [allResultProd, setAllResultProd] = useState([
    {
      id: 1,
      title:
        "گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا Apple iPhone 13 Pro max (Not Active) 256 G",
      img: "https://image.alldigitall.ir/thumb/catalog/Products-Pic/Mobile/382460/main-1.jpg-628x628.png",
      name: "samsung",
      shopNumber: 124,
      price: 2500,
      url: "https://google.com",
    },
    {
      id: 2,
      title:
        "گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا Apple iPhone 13 Pro max (Not Active) 256 G",
      img: "https://image.alldigitall.ir/thumb/catalog/Products-Pic/Mobile/382460/main-1.jpg-628x628.png",
      name: "samsung",
      shopNumber: 14,
      price: 400,
      url: "https://google.com",
    },
  ]);
  const [price, setPrice] = useState({
    min: "0",
    max: "500000",
  });
  const [sortFilter, setSortFilter] = useState("publish_date");

  useEffect(() => {
    let hasData = false;
    // if (!hasData) {
    //   axios
    //     .get(
    //       `http:localhost:8000/${params.category}?search=${params.catname}&from_price=${price.min}&to_price=${price.max}&ordering=${sortFilter}`
    //     )
    //     .then((info) => {
    //       setAllResultProd(info);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    return () => {
      hasData = true;
    };
  }, [price, sortFilter]);

  const handleChangePrice = (e) => {
    const { name, value } = e.target;
    setPrice((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="searchresult">
      <PageHeader />
      <div className="main-data">
        <i
          className={`fa-solid handle-side-filter ${
            isSideFilter ? "fa-xmark" : "fa-bars"
          }`}
          onClick={() => {
            setIsSideFilter(!isSideFilter);
          }}
        ></i>
        <div
          className={`filter-data ${isSideFilter ? "open-side-filter" : null}`}
        >
          <div className="category-filter">
            <div>
              <h3>کیف و کاور گوشی</h3>
            </div>
            <div>
              <h3>محافط صحفه نمایش گوشی</h3>
            </div>
            <div>
              <h3>پایه نگهدارنده گوشی و تبلت</h3>
            </div>
            <div>
              <h3>سایر قطعات گوشی و تبلت</h3>
            </div>
            <div>
              <h3>نمایش تمام دسته بندی ها</h3>
            </div>
          </div>
          {/* split line */}
          <div className="split-line"></div>
          <div className="price-filter">
            <div className="main-price">
              <h3>قیمت (تومان)</h3>
              <i
                className={`fa-solid fa-angle-down price-angle ${
                  priceFilter ? "rotate-angle" : null
                }`}
                onClick={() => {
                  setPriceFilter(!priceFilter);
                }}
              ></i>
            </div>
            <div className={`price-data ${priceFilter ? "openPrice" : null}`}>
              <div className="price-inputs">
                <input
                  onChange={handleChangePrice}
                  type="number"
                  name="min"
                  placeholder="از"
                  value={price.min}
                />
                <input
                  onChange={handleChangePrice}
                  type="number"
                  name="max"
                  placeholder="تا"
                  value={price.max}
                />
              </div>
              <button></button>
            </div>
          </div>
        </div>
        <div className="result-data">
          <div className="drop-filter">
            <div className="dropdown">
              <h2>مرتب سازی</h2>
              <i
                className={`fa-solid fa-angle-down drop-angle ${
                  dropFilter ? "openDrop" : null
                }`}
                onClick={() => {
                  setDropFilter(!dropFilter);
                }}
              ></i>
            </div>
            <ul className={`items  ${dropFilter ? "opendropFilter" : null}`}>
              <li className="item" onClick={() => setSortFilter("cheapest")}>
                ارزان ترین
              </li>
              <li
                className="item"
                onClick={() => setSortFilter("the_most_expensive")}
              >
                گران ترین
              </li>
              <li
                className="item"
                onClick={() => setSortFilter("publish_date")}
              >
                جدید ترین
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="cards">
            {allResultProd.map((prod) => {
              return <ResultCard key={prod.id} cardData={prod} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
