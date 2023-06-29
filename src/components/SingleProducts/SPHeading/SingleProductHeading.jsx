import React from 'react'
import "./SingleProductHeading.css"
import { NavLink } from 'react-router-dom'

const SingleProductHeading = ({title}) => {
  return (
    <div className='singleProductHeading__container'>
      <NavLink to="/products" className="goBack__link">Products</NavLink>
      <div className="singleProduct__title">{title}</div>
    </div>
  )
}

export default SingleProductHeading
