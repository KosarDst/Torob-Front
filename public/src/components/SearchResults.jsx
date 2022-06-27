import React, { useState } from "react";
import "../assets/css/SearchResults.css";
import PageHeader from "../page/PageHeader";
import ResultCard from "./ResultCard";

const SearchResults = () => {
  const [priceFilter, setPriceFilter] = useState(false);
  const [dropFilter, setDropFilter] = useState(false);
  const [isSideFilter, setIsSideFilter] = useState(false);
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
                <input type="number" name="min" placeholder="از" />
                <input type="number" name="max" placeholder="تا" />
              </div>
              <button></button>
            </div>
          </div>
        </div>
        <div className="result-data">
          <div className="drop-filter">
            <div className="dropdown">
              <h2>ارزان ترین</h2>
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
              <li className="item">ارزان ترین</li>
              <li className="item">گران ترین</li>
              <li className="item">جدید ترین</li>
            </ul>
          </div>
          {/*  */}
          <div className="cards">
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
