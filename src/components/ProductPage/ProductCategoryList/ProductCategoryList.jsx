import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import './ProductCategoryList.css'
import { useProductContext } from '../../../State/context/ProductContext';

const ProductCategoryList = () => {
  
    const {products,getUniqueValue} = useProductContext()
    let uniqueCategory = getUniqueValue(products, "category");



    return (
        <div  className='ProductCategory__container'>

                   <div className="productCategory_heading">
                    Categories
                   </div>
            <ul className="productCategory_ul">
                <li className="productCategory_li">
                    <div className="categories productCategory_all">
                        All
                    </div>
                    {
                        uniqueCategory.map((category, index) => {
                            return (
                                <div key={index} className="categories">
                                   <a href="#">{category}</a>
                                </div>
                            )
                        })
                    }
                </li>
            </ul>

        </div>
    )
}



export default ProductCategoryList
