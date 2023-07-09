import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/HomeSection/Home'
import Navbar from './components/NavBar/Navbar'
import PreLoader from './components/PreLoader/PreLoader'
import Footer from './components/Footer/Footer'
import Product from './components/ProductPage/Product'
import {  BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Service from './components/ServicePage/Service'
import Cart from './components/CartPage/Cart'
import SingleProduct from './components/SingleProducts/SingleProduct'
import CategoryProduct from './components/ProductPage/CategoryProduct/CategoryProduct'
import ErrorPage from './components/ErrorPage/ErrorPage'



function App() {
  // state for preloader 
  const [IsPreLoader, setIsPreLoader] = useState(true)
  


  useEffect(() => {
    // when the page gets load set loader to true
    // setIsPreLoader(true)
    // setIsPreLoader(true)
  
    // after 8 sec set the loader to false
    setTimeout(() => {
      setIsPreLoader(false)
    }, 5000);
 
  }, [])
  

  return (

    // if loader is true show preloader else show our app
    <>
      {IsPreLoader 
      ?
        <PreLoader />
        :
    <div className="app">
      <Router>
      <Navbar />
        <Routes>
        <Route exact="true" path='/' element={ <Home />} />
        <Route exact path='/products' element={<Product />} />  
        <Route exact path='/products/category/:category' element={<CategoryProduct />} />  
        <Route exact path='/services' element={<Service />} />  
        <Route exact path='/singleproduct/:id' element={<SingleProduct />} />  
        <Route exact path='/cart' element={<Cart />} />  
        <Route exact path='*' element={<ErrorPage />} />  
        
        </Routes>
      <Footer />
      </Router>
    </div>

       } 
    </>
  )
}

export default App