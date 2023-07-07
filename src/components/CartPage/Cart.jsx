import React, { useEffect } from 'react'
import './Cart.css'
import GoToTop from '../../utils/GoToTop'
import { useProductContext } from '../../State/context/ProductContext'
import CartItemContainer from './CartItemContainer/CartItemContainer'
import CartTotal from './Carttotal/CartTotal'

const Cart = () => {
  const {cartItem, setCartItem} = useProductContext()
  console.log(cartItem);
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);
  return (


    <div className='cart_container'>
      <h1>My cart</h1>
      <div className="cartItems_Total">
        <div className="cartItems">

      {
        
        cartItem.map((item,index)=>{
          
          return  <CartItemContainer 
          key={index}
          id={item.id}
          image={item.thumbnail}
          description={item.description}
          price={item.price}
          stock={item.stock}
          
          />
        })
      }
        </div>
        <div className="cartItem_total">

     <CartTotal />
        </div>

      </div>

      <GoToTop />
    </div>
  )
}

export default Cart
