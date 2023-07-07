import React, { useState } from 'react'
import './CartItemContainer.css'
import SingleProductQuantity from '../../SingleProducts/SingleProductQuantity/SingleProductQuantity'
import { Delete } from '@mui/icons-material';
import { useProductContext } from '../../../State/context/ProductContext';

const CartItemContainer = ({id,image,description, price,stock}) => {
    const [quantity, setQuantity] = useState(1);
  const {cartItem, setCartItem} = useProductContext()

  
    const handleQuantityChange = (newQuantity) => {
      setQuantity(newQuantity);
    }
    const handleDelete = (id) =>{
      let confirmation = confirm("Do you want to delete it ")
      console.log(confirmation);
      if (confirmation) {
        
        let updateCart = cartItem.filter((item)=> item.id !== id)
        setCartItem(updateCart)
        localStorage.setItem('cart', JSON.stringify(updateCart));
      }

    }
  return (
    <div className='cartItem_container'>
        <div className="cartItem_image">
            <img src={image} alt="image" />
        </div>
        <div className="cartItem_details">
            <div className="cartItem_description">  
           {description}
            </div>
            <div className="cartItem_price">${price}</div>
            {/* Add logic do we have stock if yess then have stock otherwise not in stock */}
            <div className="cartItem_stock">{stock > quantity && stock > 0 ? "In Stock" : "Out Of stock"}</div>
                        <SingleProductQuantity onQuantityChange={handleQuantityChange} key={id} stock={stock} productId={id} />
    
            <hr />
            <div className="cartItem_totalPrice">
                
            <div className="cartItem_subTotal">SubTotal = ${quantity * price}  </div>
            </div>
            <div className="cartItem_delete" onClick={() => handleDelete(id)}>
              <Delete  />
            </div>
        </div>
    
    </div>
  )
}

export default CartItemContainer
