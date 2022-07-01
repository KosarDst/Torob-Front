import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/ResultCard.css";

const ResultCard = ({ cardData, favStatus }) => {
  const [isFavorite, setIsFavorite] = useState(favStatus);
  /* handle favorite proccess */
  const handleFav = (e) => {
    const { name } = e.target;
    const currUser = localStorage.getItem("userDetail");
    if (isFavorite) {
      axios
        .delete(`http://localhost:8000/api/v0/post/favorite/${name}`, currUser)
        .then((info) => {
          setIsFavorite(true);
        })
        .catch((err) => err);
    } else {
      axios
        .post(`http://localhost:8000/api/v0/post/favorite`, currUser)
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
          to={`/productinfo/${cardData ? cardData.name : null}`}
        >
          <h3>{cardData ? cardData.name : null}</h3>
        </Link>
      </div>
      <div className="card-price">
        از {cardData ? cardData.min_price : null} تومان
      </div>
      <div className="card-shop-number">
        {cardData ? cardData.description : null}
      </div>
      <div className="card-icon">
        <i
          name={cardData ? cardData.name : null}
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
