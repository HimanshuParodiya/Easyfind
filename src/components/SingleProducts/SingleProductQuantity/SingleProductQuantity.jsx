import React, { useEffect, useState } from "react";
import "./SingleProductQuantity.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const SingleProductQuantity = ({ onQuantityChange, stock }) => {
  // console.log(stock);
  const [quantityAlert, setQuantityAlert] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    quantity < stock
      ? setQuantity((prev) => prev + 1)
      : setQuantity((prev) => prev);
    quantity >= stock
      ? setQuantityAlert("Sorry! we have limited stock")
      : setQuantityAlert("");
  };
  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);

  const handleDecrement = () => {
    quantity > 1
      ? setQuantity((prev) => prev - 1)
      : setQuantity((prev) => prev);
    quantity <= 1
      ? setQuantityAlert("Quantity Should be atleast 1")
      : setQuantityAlert("");
  };

  return (
    <div className="singleProductQuantity_container">
      <button
        className="singleProductQuantity_button increaseQuantity"
        onClick={handleIncrement}
      >
        <FaPlus />
      </button>
      <div className="singleProductQuantity_quantity">{quantity}</div>
      <button
        className="singleProductQuantity_button decreaseQuantity"
        onClick={handleDecrement}
      >
        <FaMinus />
      </button>
      <span className="quantityAlert">{quantityAlert}</span>
    </div>
  );
};

export default SingleProductQuantity;
