import React, { useState } from 'react'
import './Product.css'
import ProductCategoryList from './ProductCategoryList/ProductCategoryList'
import FeaturedProduct from './FeaturedProducts/FeaturedProduct'



const Product = () => {



  return (
    <div className='product_container'>
      <div className="product_category_section">
        <ProductCategoryList />
      </div>
      <div className="product_featured">
      <FeaturedProduct />
      </div>
    </div>
  )
}

export default Product
