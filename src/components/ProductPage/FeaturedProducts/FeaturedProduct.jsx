import React, { useEffect } from 'react'
import './FeaturedProduct.css'
import ProductContainer from '../../ProductBox/ProductContainer'
import { useProductContext } from '../../../State/context/ProductContext'
import { MagnifyingGlass } from 'react-loader-spinner'

const FeaturedProduct = ({products,loading}) => {
  const {getUniqueValue,handelInfiniteScroll,limits,getLimitedProducts } = useProductContext()
  // creating an unique value for category from products array 
  let uniqueCategory = getUniqueValue(products, "category");

  useEffect(() => {
    const fetchData = async () => {
      await getLimitedProducts(limits);
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
                              image={productImages.thumbnail}

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
