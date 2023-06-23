import React from 'react'
import './Home.css'
import HomeBanner from './HomeBanner/HomeBanner'
import ProductsCategory from './ProductsCategory/ProductsCategory'
import ProductsRow from './ProductsRow/ProductsRow'


const Home = () => {


  return (
    <div className="home">
      {/* Carousel banner  */}
      <HomeBanner />

      {/* Categories we have  */}
      <ProductsCategory />

      {/* Some products of each categories  */}
      <ProductsRow />
  
    </div>
  )
}

export default Home
