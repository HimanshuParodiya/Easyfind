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
            uniqueCategory.map((category,index)=>{
                let product = products.filter((item) => item.category === category)
                // let images = product.map((productImage)=> {console.log(productImage)})
               return(
                <div key={index}>
                
                   <h5 className="productCategory__name" >{category}</h5>
                <div className="eachRow_deatils productCategory__details">
                   {
                       product.map((productImages)=>{
                        // console.log(productImages);
                        const slicedImages = productImages.images.slice(0, 1);
                       return  (
                            slicedImages.map((image,index)=>{
                                return <img key={index} loading='lazy' className='productCategory__image' src={image} alt="" />
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
