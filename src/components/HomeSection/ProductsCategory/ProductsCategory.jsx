import React from 'react'
import './ProductsCategory.css'
import { useProductContext } from '../../../State/context/ProductContext'

const ProductsCategory = () => {

  const {products,getUniqueValue} = useProductContext()
  let uniqueCategory = getUniqueValue(products, "category");

  // console.log(uniqueCategory);z

  

  return (
    <div className='productsCategory__container'>

      {
        // looping through the unique value array
        uniqueCategory.map((category,index) => {
          // finding the item from products array whose category is matching with our category and storing it in product variable 
          let product = products.find((item) => item.category === category);
          // console.log(product);
          

          return (
            <div key={index} className="productCategory__details">
              <div className="productCategory__image">
                {/* getting the thumbnail whose category get matched  */}
                <img loading='lazy' src={product.thumbnail} alt="img" />
              </div>
              <div className="productCategory__name">
                {/* printing all unique category  */}
                {category}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductsCategory
