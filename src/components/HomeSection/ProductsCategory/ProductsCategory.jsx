import React, { useEffect, useState } from 'react'
import './ProductsCategory.css'

const ProductsCategory = () => {

  // state for products
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

  // console.log(products);

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
                <img src={product.thumbnail} alt="img" />
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
