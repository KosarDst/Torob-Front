import React, { useState, useEffect } from "react";
import "../assets/css/ProductInfo.css";
import PageHeader from "../page/PageHeader";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { selectUser } from "../features/userSlice";

const ProductInfo = () => {
  const user = useSelector(selectUser);
  /*  */
  const params = useParams();
  /*  */
  const [isFavorite, setIsFavorite] = useState(false);
  /* use this format of data in productiinfo route */
  const [currentProd, setCurrentProd] = useState([
    {
      id: 1,
      title:
        "گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا Apple iPhone 13 Pro max (Not Active) 256 GB",
      imgUrl:
        "https://storage.torob.com/backend-api/base/images/GU/ub/GUubkYLYB5rgHX6E.png_/0x145.jpg",
      models: [
        {
          modelFeatures: "124GB - 4GB",
          modelPrice: "از 10 تومان",
        },
        {
          modelFeatures: "124GB - 4GB",
          modelPrice: "از 50 تومان",
        },
      ],
      minPrice: 1000,
      maxPrice: 2500,
      exteraTitle:
        "مشخصات گوشی سامسونگ A32 | حافظه 128 رم 6 گیگابایت ا Samsung Galaxy A32 128/6 GB",
      features: [
        {
          featuresTitle: "ابعاد",
          featuresContent: " 158.9x73.6x8.4 میلیمتر ",
        },
      ],
    },
  ]); // titile, id, imgUrl, models, minPrice, maxPrice, extraTitle, features

  useEffect(() => {
    let hasData = false;
    if (!hasData) {
      axios
        .get(
          `http://localhost:8000/api/vO/post/${params.category}/${params.categName}/${params.id}`
        )
        .then((info) => {
          setCurrentProd(info);
        })
        .catch((err) => console.log(err));
    }
    return () => {
      hasData = true;
    };
  }, []);
  /* handle report shop proccess */
  const handleReportShop = async (e) => {
    const { name } = e.target;
    const respon = await axios.post(
      `http://localhost:8000/api/vO/shop/submit-report/new/${name}/`
    );
  };
  return (
    <div className="productinfo">
      <PageHeader />
      <div className="product-container">
        <div className="main-info">
          <div className="info-img">
            <img src={currentProd ? currentProd[0].imgUrl : null} />
          </div>
          <div className="product-data">
            <h3>{currentProd[0].title}</h3>
            <h5>
              از {currentProd[0].minPrice} تومان تا {currentProd[0].maxPrice}{" "}
              تومان
            </h5>
            <div className="pro-model">
              {currentProd[0].models.map((model) => {
                return (
                  <span>
                    <p>{model.modelFeatures}</p>
                    <p>{model.modelPrice}</p>
                  </span>
                );
              })}
            </div>
            <div className="pro-cta">
              <button className="cta-buy">
                خريد از ارزان ترين فروشنده ريجسترشده
              </button>
              <i
                className={`${
                  !isFavorite ? "fa-regular" : "fa-solid"
                }  fa-heart pro-fav ${isFavorite ? "pro-red" : null}`}
                onClick={() => {
                  setIsFavorite(!isFavorite);
                }}
              ></i>
              <button
                name={currentProd[0].id}
                onClick={(e) => handleReportShop(e)}
                className="cta-report"
              >
                گزارش
              </button>
            </div>
          </div>
        </div>
        <div className="extra-info">
          <div className="extra-info-content">
            <h2>{currentProd[0].exteraTitle}</h2>
            <h3>مشخصات کلی</h3>
            {currentProd[0].features.map((feature) => {
              return (
                <div className="item">
                  <h5>{feature.featuresTitle}</h5>
                  <p>{feature.featuresContent}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
