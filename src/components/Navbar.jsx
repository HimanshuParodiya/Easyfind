import React from 'react'
import './Navbar.css'
import Logo from '../assets/Easyfindlogo.svg'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <>
        <header>
            <nav className='navbar'>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navbar_search">
                    <input type="text" />
                    <AiOutlineSearch size={25} />

                </div>
                <div className="navbar_menu">
                    <ul className="navbar_ul">
                        <li className="navbar_li"><a href="#">Home</a></li>
                        <li className="navbar_li"><a href="#">Products</a></li>
                        <li className="navbar_li"><a href="#">Service</a></li>
                    </ul>
                    <div className="add_to_cart">
                        <AiOutlineShoppingCart size={25} />
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar
