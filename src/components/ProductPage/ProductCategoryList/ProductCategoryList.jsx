import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import './ProductCategoryList.css'

const ProductCategoryList = () => {
    const [products, setProducts] = useState([])


    let getProducts = async () => {
        let productsData = await fetch(`https://dummyjson.com/products?limit=100`)
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
        getProducts();


    }, []);


    return (
        <div  className='ProductCategory__container'>

                   <div className="productCategory_heading">
                    Categories
                   </div>
            <ul className="productCategory_ul">
                <li className="productCategory_li">
                    <div className="categories productCategory_all">
                        All
                    </div>
                    {
                        uniqueCategory.map((category, index) => {
                            return (
                                <div key={index} className="categories">
                                   <a href="#">{category}</a>
                                </div>
                            )
                        })
                    }
                </li>
            </ul>

        </div>
    )
}



export default ProductCategoryList
