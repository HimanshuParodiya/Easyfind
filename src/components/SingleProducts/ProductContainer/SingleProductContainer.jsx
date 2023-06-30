import React, { useState } from "react";
import './SingleProductContainer.css'

const SingleProductContainer = ({ images, thumbnail }) => {
  const [mainImage, setMainImage] = useState(thumbnail); //by default the url will be the same as 0th index

  if (!images || images.length === 0) {
    return null; // or return a placeholder component or message
  }

  return (
    <div className="singleProductImage_container">
      <div className="singleProductImage_smallContainer">
        {images.map((image, index) => {
          return (
            <figure className="singleProductImage_small" key={index} >
              <img
                src={image}

                alt="image"
                onClick={() => setMainImage(image)} // passing this url to setMainImage
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd column  */}

      <div className="singleProductImage_big">
        <img src={mainImage} alt="image" />
      </div>
    </div>
  );
};

export default SingleProductContainer;