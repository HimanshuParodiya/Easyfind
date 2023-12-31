import React from 'react'
import './Product.css'
import ProductCategoryList from './ProductCategoryList/ProductCategoryList'
import FeaturedProduct from './FeaturedProducts/FeaturedProduct'
import GoToTop from '../../utils/GoToTop'
import { useProductContext } from '../../State/context/ProductContext'



const Product = () => {
  const {limitedProducts,isLimitedLoading } = useProductContext()



  return (
    <div className='product_container'>
      <div className="product_category_section">
        <ProductCategoryList />
      </div>
      <div className="product_featured">
      <FeaturedProduct products={limitedProducts}  loading={isLimitedLoading} />
      </div>
      <GoToTop />
    </div>
  )
}

export default Product
