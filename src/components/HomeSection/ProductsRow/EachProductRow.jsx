import React, { useEffect, useState } from 'react'
import './ProductsRow.css'

const EachProductRow = () => {
  const [products, setProducts] = useState([])
  let getProducts = async () => {
    let productsData = await fetch('https://dummyjson.com/products?limit=100')
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


  useEffect(() => {
    // always run this function when the page will load
    getProducts()


  }, [])


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
                    console.log(productImages);
                    const slicedImages = productImages.images.slice(0, 1);
                    return (

                      slicedImages.map((image, index) => {
                        return (
                          <div className='eachProduct__details_container'>
                            <img key={index} loading='lazy' className='productCategory__image' src={image} alt="" />
                            <div className="eachProduct__detail">
                              <div className="eachProduct_name_price_discount">
                                <p className='bold eachProduct_title'>{productImages.title}</p>
                                <div className="eachProduct_price_discount">
                                  <div className="discount_on_value_box">
                                    <p className='discount_value'>{productImages.discountPercentage}%</p>
                                    <p className='bold eachProduct_discount_container'>On
                                      <p className='eachProduct_total_discount'>
                                        ${((+productImages.discountPercentage * +productImages.price) / 100 + (productImages.price)).toFixed(2)}

                                      </p>
                                    </p>

                                  </div>
                                  <p className='bold eachProduct_price'> ${productImages.price}</p>

                                </div>
                              </div>

                              <div className="eachProduct_rating_brand">
                                <p className='bold_semi'>Brand: {productImages.brand}</p>
                                <p className='bold_semi'>⭐ {productImages.rating}</p>
                              </div>


                              <div className="eachProduct_stock">
                                <p className='bold_semi'>Available stocks {productImages.stock}</p>
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
