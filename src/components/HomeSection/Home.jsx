import React from 'react'
import './Home.css'
import HomeBanner from './HomeBanner/HomeBanner'
import ProductsCategory from './ProductsCategory/ProductsCategory'


const Home = () => {


  return (
    <div className="home">
      <HomeBanner />
      <ProductsCategory />
  
    </div>
  )
}

export default Home
