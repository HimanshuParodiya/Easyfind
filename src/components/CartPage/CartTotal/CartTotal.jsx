import React from "react";
import "./CartTotal.css";
import { useProductContext } from "../../../State/context/ProductContext";

const CartTotal = () => {
  const { cartItem } = useProductContext();

  return (
    <div className="cartTotal_container">
      <div className="cartTotal_heading">Price Details</div>
      <hr />


      <div className="cartTotal_price cartTotal_eachRow">
        <div className="cartTotal_price_left">
          Price ({`${cartItem.length} items`})
        </div>
        <div className="cartTotal_price_right">
          ${cartItem.reduce((accu, ci) => {
            let total = (+accu + ((+ci.discountPercentage * +ci.price)/100 + +ci.price)).toFixed(2);

            return total;
          }, 0)}
        </div>
      </div>



      <div className="cartTotal_discount cartTotal_eachRow">
        <div className="cartTotal_discount_left">
          Discount
        </div>
        <div className="cartTotal_discount_right greenText">
         -${cartItem.reduce((accu, ci) => {
            let total = (+(accu) + ((+(ci.discountPercentage) * +(ci.price))/100)).toFixed(2);
            return total;
          }, 0)}
        </div>
      </div>





      <div className="cartTotal_delivery cartTotal_eachRow">
        <div className="cartTotal_delivery_left">
         Delivery Charges
        </div>
        <div className="cartTotal_delivery_right greenText">
          Free
        </div>
      </div>



<hr />


      <div className="cartTotal_totalAmoun cartTotal_eachRow">
        <div className="cartTotal_totalAmount_left">
                Total Amount
        </div>
        <div className="cartTotal_totalAmount_right">
        ${
            cartItem.reduce((accu, ci)=>{
            
              let total = accu + ci.price

              return total
            },0)
        }
        </div>
      </div>

<hr />

        <div className="cartTotal_saving greenText">
            You will save 
            <span className="saving">
                ${cartItem.reduce((accu, ci) => {
                     let total = (+(accu) + ((+(ci.discountPercentage) * +(ci.price))/100)).toFixed(2);
                     
                     
                     return total;
                    }, 0)}
                    </span> 
            on this order
        </div>

    </div>
  );
};

export default CartTotal;
