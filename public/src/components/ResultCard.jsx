import React, { useState } from "react";
import "../assets/css/ResultCard.css";

const ResultCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="card-container">
      <div className="card-img">
        <img
          src="https://storage.torob.com/backend-api/base/images/GU/ub/GUubkYLYB5rgHX6E.png_/0x145.jpg"
          alt="mobile"
        />
      </div>
      <div className="card-title">
        <h3>
          گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا Apple
          iPhone 13 Pro max (Not Active) 256 G
        </h3>
      </div>
      <div className="card-price">از 35/000/000 تومان</div>
      <div className="card-shop-number">در 167 فروشگاه</div>
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
