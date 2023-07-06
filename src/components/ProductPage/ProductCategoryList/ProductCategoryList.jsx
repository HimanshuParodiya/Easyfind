import React from 'react'
// import { NavLink } from 'react-router-dom'
import './ProductCategoryList.css'
import { useProductContext } from '../../../State/context/ProductContext';
import { NavLink } from 'react-router-dom';

const ProductCategoryList = () => {
    const {products,getUniqueValue,setProductCategory} = useProductContext()



    let uniqueCategory = getUniqueValue(products, "category");

    return (
        <div  className='ProductCategory__container'>

                   <div className="productCategory_heading">
                    Categories
                   </div>
            <ul className="productCategory_ul">
                <li className="productCategory_li">
                    <div className="productCategory_all" >
                        <NavLink className="categories" activeclassname="active_category" to={`/products`}  >
                             All
                            
                            </NavLink>
                    </div>
                    {
                        uniqueCategory.map((category, index) => {
                            return (
                                <div key={index} >
                                   <NavLink key={index} className="categories" activeclassname="active_category" to={`/products/category/${category}`} onClick={() => setProductCategory(category)}>{category}</NavLink>
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
