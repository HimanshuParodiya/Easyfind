import React, { useEffect, useState } from 'react'
import './ProductsCategory.css'

const ProductsCategory = () => {
  const [products, setProducts] = useState([])
  let getProducts = async () => {
    let productsData = await fetch('https://dummyjson.com/products?limit=100')
    let data = await productsData.json()
    // console.log(data.products);
    if (data && data.products) {
      setProducts(data.products)
    }
  }

  // console.log(products);
  let getUniqueValue = (datasArray, property) => {
    let getValue = datasArray.map((dataArray) => {
      return dataArray[property]
    })
    let uniqueValue = [...new Set(getValue)]
    return uniqueValue;
  }

  let uniqueCategory = getUniqueValue(products, "category");


  useEffect(() => {
    getProducts()


  }, [])

  return (
    <div className='productsCategory__container'>

      {
        uniqueCategory.map((category,index) => {
          let product = products.find((item) => item.category === category);
          

          return (
            <div key={index} className="productCategory__details">
              <div className="productCategory__image">
                <img src={product.thumbnail} alt="img" />
              </div>
              <div className="productCategory__name">
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
