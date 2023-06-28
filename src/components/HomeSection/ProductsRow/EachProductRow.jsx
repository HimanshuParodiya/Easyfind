import React, { useEffect, useState } from 'react'
import './ProductsRow.css'
import { MagnifyingGlass } from 'react-loader-spinner'
import ProductContainer from '../../ProductBox/ProductContainer'


import { useProductContext } from '../../../State/context/ProductContext'


const EachProductRow = () => {
  const {limitedProducts,getLimitedProducts ,getUniqueValue,isLimitedLoading,handelInfiniteScroll,limits } = useProductContext()
  // creating an unique value for category from products array 
  let uniqueCategory = getUniqueValue(limitedProducts, "category");

  useEffect(() => {
    const fetchData = async () => {
      await getLimitedProducts(limits);
    };
  
    window.addEventListener("scroll", handelInfiniteScroll);
    fetchData();
    
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [limits]);

  
  return (
    <div className='eachRow'>
      {
        uniqueCategory.map((category, index) => {
          let product = limitedProducts.filter((item) => item.category === category)
          // let images = product.map((productImage)=> {console.log(productImage)})
          return (
            <div key={index}>

              <h5 className="productCategory__name" >{category}</h5>
              <div className="eachRow_deatils productCategory__details">
                {
                  product.map((productImages) => {
                    // console.log(productImages);
                    const slicedImages = productImages.images.slice(0, 1);
                    return (

                      slicedImages.map((image, index) => {
                        return (
                          <ProductContainer 
                          key={index}
                          image={image}
                          title={productImages.title}
                          discountPercentage={productImages.discountPercentage}
                          price={productImages.price}
                          brand={productImages.brand}
                          rating={productImages.rating}
                          stock={productImages.stock}
                          />
                        )
                      })
                    )
                  })
                }
              </div>
            </div>

          )
        })
      }
      {
        isLimitedLoading &&
        <div className="loadingIcon">

        <MagnifyingGlass
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        glassColor = '#c0efff'
        color = '#111'
        />
        </div>
      }

    </div>
  )
}

export default EachProductRow
