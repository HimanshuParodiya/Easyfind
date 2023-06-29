import React, { useEffect } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router";
import { useProductContext } from "../../State/context/ProductContext";
import SingleProductHeading from "./SPHeading/SingleProductHeading";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import SingleProductContainer from "./ProductContainer/SingleProductContainer";
import StarRating from "./StarRating";
import { MagnifyingGlass } from "react-loader-spinner";
import { BeatLoader } from "react-spinners";
import GoToTop from "../../utils/GoToTop";

const SingleProduct = () => {
  const { id } = useParams();
  const API = "https://dummyjson.com/products";
  const { getSingleProducts, singleProducts, isSingleLoading } =
    useProductContext();

  // console.log(`${API}/${id}`);
  // console.log(singleProducts);
  // addressing id with productId because there is so many id
  // console.log(id);
  const {
    id: productId,
    title,
    discountPercentage,
    thumbnail,
    brand,
    images,
    price,
    description,
    category,
    stock,
    rating,
  } = singleProducts;
  // console.log(singleProducts);

  useEffect(() => {
    getSingleProducts(`${API}/${id}`);
  }, []);

  return (
    <>
      <div className="singleProduct__container">
    {
        isSingleLoading  ?
        <div className="singleProduct_Loader">
        <BeatLoader

        
        // color={color}
        // loading={loading}
        // cssOverride={override}
        // size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
          </div>

 :
      <div>

      <SingleProductHeading title={title} />
      <div className="singleProduct_details">
      <div className="singleProduct_images">
            <SingleProductContainer thumbnail={thumbnail} images={images} />
          </div>
        <div className="singleProduct_data">
          <p className="singleProduct_title">{title}</p>
          <p className="singleProduct_description">{description}</p>

          <div className="singleProduct_Discount_Price">
            <p className="singleProduct_Discount">-{discountPercentage}%</p>
            <p>on</p>
          <p className="singleProduct_Price">${price}</p>
           
          </div>


          <div className="singleProduct_DiscountInCurrency">
            Regular Price {" "}
              <del>
                ${((+discountPercentage * +price) / 100 + price).toFixed(2)}
              </del>
            </div>

          <div className="singleProduct_rating">
            {/* {" "}
              {"⭐".repeat(+rating)}
              {"".length < 5 ? "".concat("✩") : ""}
              {rating} */}
            <StarRating rating={rating} />
          </div>
          <div className="singleProduct_service">
            <div className="singleProduct_warrantyData">
              <TbTruckDelivery className="warranty_icon" />
              <p>Free Delivery</p>
            </div>

            <div className="singleProduct_warrantyData">
              <TbReplace className="warranty_icon" />
              <p>30 Days Replacement</p>
            </div>

            <div className="singleProduct_warrantyData">
              <TbTruckDelivery className="warranty_icon" />
              <p>Easy Delivered </p>
            </div>

            <div className="singleProduct_warrantyData">
              <MdSecurity className="warranty_icon" />
              <p>2 Year Warranty </p>
            </div>
          </div>

          <div className="singleProduct_info">
            <p>
              Available:
              <span> {stock > 0 ? `In Stock ${stock}` : "Not Available"}</span>
            </p>
           
            <p>
              By :<span> {brand} </span>
            </p>
          </div>
        </div>
      </div>
      </div>
  }
  <GoToTop />
  </div>
</>
  );
};

export default SingleProduct;
