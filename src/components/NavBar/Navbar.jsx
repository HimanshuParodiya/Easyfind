import React, { useEffect, useState } from 'react'
import './Navbar.css'
import LightLogo from '/src/assets/Logo/EasyfindLightLogo.png'
import DarkLogo from '/src/assets/Logo/EasyFindDarkLogo.png'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {

    // To Toggle dark and light navbar
    const [showNavbar, setShowNavbar] = useState(false)

    // if scroll is more than 100 then show dark nav otherthan show light one
    let transitionNav = () =>{
        if(window.scrollY > 100){
            setShowNavbar(true)
        }else{
            setShowNavbar(false)
        }
    }

    useEffect(() => {
        // adding eventlistener for scroll and execute the function which will check if scroll is more than 100
      window.addEventListener("scroll", transitionNav )
    
      return () => {
        // removeing eventlistener
        window.removeEventListener("scroll", transitionNav)
      }
    }, [])
    
  return (
    <>
        <header>
            <nav className={`navbar ${showNavbar && "black_nav box_shadow"}`}>
                {/* Logo  */}
                <div className="logo">
                    {/* if showNavbar is true show darkLogo else show lightLogo */}
                    <img src={`${showNavbar ? DarkLogo : LightLogo}`} alt="" />
                </div>


                {/* Seachbar  */}
                <div className="navbar_search">
                    <input type="text" placeholder="let's Find"/>
                    <AiOutlineSearch className='search_icon' size={25} />

                </div>


                {/* Nav links  */}
                <div className="navbar_menu">
                    <ul className="navbar_ul">
                        <li className="navbar_li"><a className={`${ showNavbar? "color_white" : "color_black"}`} href="#">Home</a></li>
                        <li className="navbar_li"><a className={`${ showNavbar? "color_white" : "color_black"}`}  href="#">Products</a></li>
                        <li className="navbar_li"><a className={`${ showNavbar? "color_white" : "color_black"}`}  href="#">Service</a></li>
                    </ul>


                    {/* cart  */}
                    <div className="add_to_cart">
                        <AiOutlineShoppingCart className={`${ showNavbar && "color_white"}`} size={25} />
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar
