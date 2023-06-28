import React from 'react'
import "./ProductContainer.css"
import { NavLink } from 'react-router-dom'

const ProductContainer = ({image,title,discountPercentage, price, brand, rating, stock}) => {
  return (
    <NavLink to={`/singleproduct/:id`}>

       <div  className='eachProduct__details_container'>
                            <img  loading='lazy' className='productCategory__image' src={image} alt="" />
                            <div className="eachProduct__detail">
                              <div className="eachProduct_name_price_discount">
                                <div className='bold eachProduct_title'>{title}</div>
                                <div className="eachProduct_price_discount">
                                  <div className="discount_on_value_box">
                                    <span className='discount_value'>{discountPercentage}%</span>
                                    <span className='bold eachProduct_discount_container'>On
                                      <span className='eachProduct_total_discount'>
                                        ${((+discountPercentage * +price) / 100 + (price)).toFixed(2)}

                                      </span>
                                    </span>

                                  </div>
                                  <span className='bold eachProduct_price'> ${price}</span>

                                </div>
                              </div>

                              <div className="eachProduct_rating_brand">
                                <span className='bold_semi'>Brand: {brand}</span>
                                <span className='bold_semi'>⭐ {rating}</span>
                              </div>


                              <div className="eachProduct_stock">
                                <span className='bold_semi'>Available stocks {stock}</span>
                              </div>

                            </div>
                          </div>
    </NavLink>
  )
}

export default ProductContainer
