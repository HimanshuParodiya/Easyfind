import React, { useEffect, useState } from 'react'
import './FeaturedProduct.css'
import ProductContainer from '../../ProductBox/ProductContainer'
import { useProductContext } from '../../../State/context/ProductContext'
import { MagnifyingGlass } from 'react-loader-spinner'

const FeaturedProduct = ({products,getProducts,loading}) => {
  const {getUniqueValue,handelInfiniteScroll,limits } = useProductContext()
  // creating an unique value for category from products array 
  let uniqueCategory = getUniqueValue(products, "category");

  useEffect(() => {
    const fetchData = async () => {
      await getProducts(limits);
    };
  
    window.addEventListener("scroll", handelInfiniteScroll);
    fetchData();
    
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [limits]);

  
  return (
    <div >
     {
        uniqueCategory.map((category, index)=>{
            let product = products.filter((item)=> item.category === category) 
            
            return (
                <div className='featuredProduct' key={index}>
                    {
                        product.map((productImages, index)=>{
                            return ( 
                              <ProductContainer 
                              key={index}
                              id={productImages.id}
                              // image={productImages.thumbnail}
                              image={productImages.thumbnail.status ===200 ? productImages.thumbnail : "data:image/png;base64,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"}

                              title={productImages.title}
                              discountPercentage={productImages.discountPercentage}
                              price={productImages.price}
                              brand={productImages.brand}
                              rating={productImages.rating}
                              stock={productImages.stock}
                              />
                             )
                        })
                    }
                
                </div>
            )
        })
     } 
      {
        loading &&
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

export default FeaturedProduct
