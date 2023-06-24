import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/HomeSection/Home'
import Navbar from './components/NavBar/Navbar'
import PreLoader from './components/PreLoader/PreLoader'
import Footer from './components/Footer/Footer'

function App() {
  // state for preloader 
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    // when the page gets load set loader to true
    setLoader(true)
  
    // after 8 sec set the loader to false
    setTimeout(() => {
      setLoader(false)
    }, 5000);
  
 
  }, [])
  

  return (

    // if loader is true show preloader else show our app
    <>
      {loader 
      ?
        <PreLoader />
        :
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>

      }
    </>
  )
}

export default App