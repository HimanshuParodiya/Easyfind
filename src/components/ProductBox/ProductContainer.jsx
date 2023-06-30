import React from "react";
import "./ProductContainer.css";
import { NavLink } from "react-router-dom";

const ProductContainer = ({
  id,
  image,
  title,
  discountPercentage,
  price,
  brand,
  rating,
  stock,
}) => {
  const handleLength = (word) => {
    if (word.length > 20) {
      return word.slice(0, 15).concat("....");
    }
    return word;
  };
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="productCategory__details eachProduct__details_container">
        <div className="productCategory__image_container">
          <img
            loading="lazy"
            className="productCategory__image"
            src={image}
            alt=""
          />
        </div>
        <div className="eachProduct__detail">
          <div className="eachProduct_name_price_discount">
            <div className="bold eachProduct_title">{handleLength(title)}</div>
            <div className="eachProduct_price_discount">
              <div className="discount_on_value_box">
                <span className="discount_value">{discountPercentage}%</span>
                <span className="bold eachProduct_discount_container">
                  On
                  <span className="eachProduct_total_discount">
                    ${((+discountPercentage * +price) / 100 + price).toFixed(2)}
                  </span>
                </span>
              </div>
              <span className="bold eachProduct_price"> ${price}</span>
            </div>
          </div>

          <div className="eachProduct_rating_brand">
            <span className="bold_semi">by: {handleLength(brand)}</span>
            <span className="bold_semi">⭐ {rating}</span>
          </div>

          <div className="eachProduct_stock">
            <span className="bold_semi">Available stocks {stock}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductContainer;
