import React, { useState } from "react";
import "../assets/css/ProductInfo.css";
import PageHeader from "../page/PageHeader";

const ProductInfo = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="productinfo">
      <PageHeader />
      <div className="product-container">
        <div className="main-info">
          <div className="info-img">
            <img src="https://storage.torob.com/backend-api/base/images/GU/ub/GUubkYLYB5rgHX6E.png_/0x145.jpg" />
          </div>
          <div className="product-data">
            <h3>
              گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا
              Apple iPhone 13 Pro max (Not Active) 256 GB
            </h3>
            <h5>از ۴۶٫۲۹۹٫۰۰۰ تومان تا ۵۸٫۵۰۰٫۰۰۰ تومان</h5>
            <div className="pro-model">
              <span>
                <p>124GB - 4GB</p>
                <p>از 10 تومان</p>
              </span>
              <span>
                <p>124GB - 4GB</p>
                <p>از 10 تومان</p>
              </span>
              <span>
                <p>124GB - 4GB</p>
                <p>از 10 تومان</p>
              </span>
            </div>
            <div className="pro-cta">
              <button>خريد از ارزان ترين فروشنده ريجسترشده</button>
              <i
                className={`${
                  !isFavorite ? "fa-regular" : "fa-solid"
                }  fa-heart pro-fav ${isFavorite ? "pro-red" : null}`}
                onClick={() => {
                  setIsFavorite(!isFavorite);
                }}
              ></i>
              <i class="fa-solid fa-share-nodes cta-share"></i>
            </div>
          </div>
        </div>
        <div className="extra-info">
          <div className="extra-info-content">
            <h2>
              مشخصات گوشی سامسونگ A32 | حافظه 128 رم 6 گیگابایت ا Samsung Galaxy
              A32 128/6 GB
            </h2>
            <h3>مشخصات کلی</h3>
            <div className="item">
              <h5>ابعاد</h5>
              <p>158.9x73.6x8.4 میلیمتر</p>
            </div>
            <div className="item">
              <h5>ابعاد</h5>
              <p>158.9x73.6x8.4 میلیمتر</p>
            </div>
            <div className="item">
              <h5>ابعاد</h5>
              <p>158.9x73.6x8.4 میلیمتر</p>
            </div>
            <div className="item">
              <h5>ابعاد</h5>
              <p>158.9x73.6x8.4 میلیمتر</p>
            </div>
            <div className="item">
              <h5>ابعاد</h5>
              <p>158.9x73.6x8.4 میلیمتر</p>
            </div>
            <div className="item">
              <h5>ابعاد</h5>
              <p>158.9x73.6x8.4 میلیمتر</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
