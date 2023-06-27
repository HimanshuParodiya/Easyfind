import React, { useEffect, useState } from 'react'
import './FeaturedProduct.css'
import ProductContainer from '../../ProductBox/ProductContainer'

const FeaturedProduct = () => {
    const [products, setProducts] = useState([])
    const [categoryUrl, setCategoryUrl] = useState('?limit=100')
    let getProducts = async () => {
      let productsData = await fetch(`https://dummyjson.com/products${categoryUrl}`)
      let data = await productsData.json()
      // console.log(data.products);
  
      // if there is data and product in data is true then add in products
      if (data && data.products) {
        //adding list of data into products array
        setProducts(data.products)
      }
    }
    // getting the unique value form array 
    let getUniqueValue = (datasArray, property) => {
      // mapping throught the given array 
      let getValue = datasArray.map((dataArray) => {
        // returning all the items with property  
        return dataArray[property] // this [] is showing computed value here
      })
  
      // creating set and passing the returing value to it and making it an unique value
      let uniqueValue = [...new Set(getValue)]
      // returning the array of unique value from this function
      return uniqueValue;
    }
  
    // creating an unique value for category from products array 
    let uniqueCategory = getUniqueValue(products, "category");
  
    
    const handelInfiniteScroll = async () => {
      // console.log("scrollHeight" + document.documentElement.scrollHeight);
      // console.log("innerHeight" + window.innerHeight);
      // console.log("scrollTop" + document.documentElement.scrollTop);
      try {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight 
        ) {
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    
    
    
    // console.log(limits);
    useEffect(() => {
      const fetchData = async () => {
        await getProducts();
      };
    
      window.addEventListener("scroll", handelInfiniteScroll);
      fetchData();
      
      return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);
  
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
    </div>
  )
}

export default FeaturedProduct
