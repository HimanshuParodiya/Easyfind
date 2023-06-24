import React, { useEffect, useState } from 'react'
import './ProductsRow.css'

const EachProductRow = () => {
  const [products, setProducts] = useState([])
  const [limits, setLimits] = useState(10)
  let getProducts = async (limit) => {
    let productsData = await fetch(`https://dummyjson.com/products?limit=${limit}`)
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
        document.documentElement.scrollHeight &&
        limits < 100
      ) {
        setLimits((prev) => Math.min(prev + 10, 100));
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  
  console.log(limits);
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    getProducts(limits)
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [limits]);

  
  return (
    <div className='eachRow'>
      {
        uniqueCategory.map((category, index) => {
          let product = products.filter((item) => item.category === category)
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
                          <div key={index} className='eachProduct__details_container'>
                            <img  loading='lazy' className='productCategory__image' src={image} alt="" />
                            <div className="eachProduct__detail">
                              <div className="eachProduct_name_price_discount">
                                <div className='bold eachProduct_title'>{productImages.title}</div>
                                <div className="eachProduct_price_discount">
                                  <div className="discount_on_value_box">
                                    <span className='discount_value'>{productImages.discountPercentage}%</span>
                                    <span className='bold eachProduct_discount_container'>On
                                      <span className='eachProduct_total_discount'>
                                        ${((+productImages.discountPercentage * +productImages.price) / 100 + (productImages.price)).toFixed(2)}

                                      </span>
                                    </span>

                                  </div>
                                  <span className='bold eachProduct_price'> ${productImages.price}</span>

                                </div>
                              </div>

                              <div className="eachProduct_rating_brand">
                                <span className='bold_semi'>Brand: {productImages.brand}</span>
                                <span className='bold_semi'>⭐ {productImages.rating}</span>
                              </div>


                              <div className="eachProduct_stock">
                                <span className='bold_semi'>Available stocks {productImages.stock}</span>
                              </div>

                            </div>
                          </div>
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

    </div>
  )
}

export default EachProductRow
