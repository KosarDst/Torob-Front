import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/ResultCard.css";

const ResultCard = ({ cardData }) => {
  const [isFavorite, setIsFavorite] = useState(false);
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
          className={`${
            !isFavorite ? "fa-regular" : "fa-solid"
          }  fa-heart card-fav ${isFavorite ? "red-fav" : null}`}
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        ></i>
      </div>
    </div>
  );
};

export default ResultCard;
