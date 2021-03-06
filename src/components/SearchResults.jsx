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
  const [allResultProd, setAllResultProd] = useState([]);
  const [price, setPrice] = useState({
    min: "0",
    max: "500000",
  });
  const [sortFilter, setSortFilter] = useState("publish_date");

  useEffect(() => {
    let hasData = false;

    if (!hasData) {
      const currUser = localStorage.getItem("userDetail");
      if (
        params.category === "samsung" ||
        params.category === "xiaomi" ||
        params.category === "apple" ||
        params.category === "asus" ||
        params.category === "lenovo"
      ) {
        axios
          .get(
            `http://localhost:8000/api/v0/post/list/all?search=${params.category}&ordering=publish_date`,
            currUser
          )
          .then((info) => {
            setAllResultProd(info.data.data);
          })
          .catch((err) => {
            return err;
          });
      } else {
        axios
          .get(
            `http://localhost:8000/api/v0/post/list/${params.category}?ordering=publish_date`,
            currUser
          )
          .then((info) => {
            setAllResultProd(info.data.data);
          })
          .catch((err) => {
            return err;
          });
      }
    }

    return () => {
      hasData = true;
    };
  }, []);

  const handleChangePrice = (e) => {
    const { name, value } = e.target;
    setPrice((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleSubmitPriceFilter = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:8000/api/v0/post/list/${params.category}?from_price=${price.min}&to_price=${price.max}&ordering=publish_date`
      )
      .then((info) => setAllResultProd(info.data.data));
  };
  const handleSubmitSortFilter = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:8000/api/v0/post/list/${params.category}?ordering=${sortFilter}`
      )
      .then((info) => setAllResultProd(info.data.data));
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
              <h3>?????? ?? ???????? ????????</h3>
            </div>
            <div>
              <h3>?????????? ???????? ?????????? ????????</h3>
            </div>
            <div>
              <h3>???????? ?????????????????? ???????? ?? ????????</h3>
            </div>
            <div>
              <h3>???????? ?????????? ???????? ?? ????????</h3>
            </div>
            <div>
              <h3>?????????? ???????? ???????? ???????? ????</h3>
            </div>
          </div>
          {/* split line */}
          <div className="split-line"></div>
          <div className="price-filter">
            <div className="main-price">
              <h3>???????? (??????????)</h3>
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
                  placeholder="????"
                  value={price.min}
                />
                <input
                  onChange={handleChangePrice}
                  type="number"
                  name="max"
                  placeholder="????"
                  value={price.max}
                />
              </div>
              <button onClick={handleSubmitPriceFilter}>??????????</button>
            </div>
          </div>
        </div>
        <div className="result-data">
          <div className="drop-filter">
            <div className="dropdown">
              <h2>???????? ????????</h2>
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
              <li
                className="item"
                onClick={() => {
                  setSortFilter("cheapest");
                  handleSubmitSortFilter();
                }}
              >
                ?????????? ????????
              </li>
              <li
                className="item"
                onClick={() => {
                  setSortFilter("the_most_expensive");

                  handleSubmitSortFilter();
                }}
              >
                ???????? ????????
              </li>
              <li
                className="item"
                onClick={() => {
                  setSortFilter("publish_date");
                  handleSubmitSortFilter();
                }}
              >
                ???????? ????????
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="cards">
            {allResultProd && Array.isArray(allResultProd)
              ? allResultProd.map((prod) => {
                  return <ResultCard key={prod.id} cardData={prod} />;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
