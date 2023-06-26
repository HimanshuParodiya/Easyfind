import React, { useEffect, useState } from 'react'
import './ProductsRow.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../../state/Slice/loadingSlice'
import { MagnifyingGlass } from 'react-loader-spinner'
import ProductContainer from '../../ProductBox/ProductContainer'

const EachProductRow = () => {
  const loadingData = useSelector(state=> state.loading)
  const dispatch = useDispatch()
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
  
  
  
  
  // console.log(limits);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      await getProducts(limits);
      dispatch(setLoading(false));
    };
  
    window.addEventListener("scroll", handelInfiniteScroll);
    fetchData();
    
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
        loadingData &&
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
