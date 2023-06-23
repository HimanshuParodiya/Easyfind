import React from 'react'
import './Home.css'
import HomeBanner from './HomeBanner/HomeBanner'
import ProductsCategory from './ProductsCategory/ProductsCategory'


const Home = () => {


  return (
    <div className="home">
      {/* Carousel banner  */}
      <HomeBanner />

      {/* Categories we have  */}
      <ProductsCategory />

      {/* Some products of each categories  */}
  
    </div>
  )
}

export default Home
