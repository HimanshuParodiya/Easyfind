import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/HomeSection/Home'
import Navbar from './components/NavBar/Navbar'
import PreLoader from './components/PreLoader'

function App() {
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 5000);
  
 
  }, [])
  

  return (
    <>
      {loader 
      ?
        <PreLoader />
        :
    <div className="app">
      <Navbar />
      <Home />
    </div>

      }
    </>
  )
}

export default App