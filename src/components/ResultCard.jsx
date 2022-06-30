import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/ResultCard.css";

const ResultCard = ({ cardData, favStatus }) => {
  const [isFavorite, setIsFavorite] = useState(favStatus);
  /* handle favorite proccess */
  const handleFav = (e) => {
    const { name } = e.target;
    if (isFavorite) {
      axios
        .delete(`http://localhost:8000/api/v0/post/favorite/${name}`)
        .then((info) => {
          setIsFavorite(true);
        })
        .catch((err) => err);
    } else {
      axios
        .post(`http://localhost:8000/api/v0/post/favorite`)
        .then((info) => {
          setIsFavorite(true);
        })
        .catch((err) => err);
    }
  };
  return (
    <div className="card-container">
      <div className="card-img">
        <img
          src={cardData ? cardData.img : null}
          alt={cardData ? cardData.name : null}
        />
      </div>
      <div className="card-title">
        <Link
          to={`/productinfo/${cardData ? cardData.category : null}/${
            cardData ? cardData.categName : null
          }/${cardData ? cardData.id : null}`}
        >
          <h3>{cardData ? cardData.title : null}</h3>
        </Link>
      </div>
      <div className="card-price">
        از {cardData ? cardData.price : null} تومان
      </div>
      <div className="card-shop-number">
        در {cardData ? cardData.shopNumber : null} فروشگاه
      </div>
      <div className="card-icon">
        <i
          name={cardData ? cardData.id : null}
          className={`${
            !isFavorite ? "fa-regular" : "fa-solid"
          }  fa-heart card-fav ${isFavorite ? "red-fav" : null}`}
          onClick={(e) => {
            setIsFavorite(!isFavorite);
            handleFav(e);
          }}
        ></i>
      </div>
    </div>
  );
};

export default ResultCard;
