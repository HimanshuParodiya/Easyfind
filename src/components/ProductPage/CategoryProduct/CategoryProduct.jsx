import React from 'react'
import { useProductContext } from '../../../State/context/ProductContext';
import ProductCategoryList from '../ProductCategoryList/ProductCategoryList';
import FeaturedProduct from '../FeaturedProducts/FeaturedProduct';
import GoToTop from '../../../utils/GoToTop';

const CategoryProduct = () => {


    const {categoryProduct,getCategoryWiseProduct,isCategoryLoading } = useProductContext()


  return (
    <div className='product_container'>
    <div className="product_category_section">
      <ProductCategoryList />
    </div>
    <div className="product_featured">
    <FeaturedProduct products={categoryProduct} getProducts={getCategoryWiseProduct} loading={isCategoryLoading} />

    </div>
    <GoToTop />
  </div>
  )
}

export default CategoryProduct
