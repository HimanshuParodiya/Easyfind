import React, { useEffect, useState } from 'react'
import './Navbar.css'
import LightLogo from '/src/assets/Logo/EasyfindLightLogo.png'
import DarkLogo from '/src/assets/Logo/EasyFindDarkLogo.png'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    let transitionNav = () =>{
        if(window.scrollY > 100){
            setShowNavbar(true)
            console.log("yess");
        }else{
            setShowNavbar(false)
            console.log("no");
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", transitionNav )
    
      return () => {
        window.removeEventListener("scroll", transitionNav)
      }
    }, [])
    
  return (
    <>
        <header>
            <nav className={`navbar ${showNavbar && "black_nav box_shadow"}`}>
                <div className="logo">
                    <img src={`${showNavbar ? DarkLogo : LightLogo}`} alt="" />
                </div>
                <div className="navbar_search">
                    <input type="text" />
                    <AiOutlineSearch className='search_icon' size={25} />

                </div>
                <div className="navbar_menu">
                    <ul className="navbar_ul">
                        <li className="navbar_li"><a className={`${ showNavbar && "color_white"}`} href="#">Home</a></li>
                        <li className="navbar_li"><a className={`${ showNavbar && "color_white"}`}  href="#">Products</a></li>
                        <li className="navbar_li"><a className={`${ showNavbar && "color_white"}`}  href="#">Service</a></li>
                    </ul>
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
