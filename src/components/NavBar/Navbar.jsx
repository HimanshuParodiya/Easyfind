import React, { useEffect, useState } from "react";
import "./Navbar.css";
import LightLogo from "/src/assets/Logo/EasyfindLightLogo.png";
import DarkLogo from "/src/assets/Logo/EasyFindDarkLogo.png";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  // To Toggle dark and light navbar
  const [showNavbar, setShowNavbar] = useState(false);

  // if scroll is more than 100 then show dark nav otherthan show light one
  let transitionNav = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    // adding eventlistener for scroll and execute the function which will check if scroll is more than 100
    window.addEventListener("scroll", transitionNav);

    return () => {
      // removeing eventlistener
      window.removeEventListener("scroll", transitionNav);
    };
  }, []);

  const handleNavbar = () => {
    setOpenHamburger(!openHamburger);
    let sideMenu = document.querySelector(".sideMenu");
    sideMenu.classList.toggle("showMenu");
  };

  // console.log(openHamburger);

  return (
    <>
      <header>
        <nav className={`navbar ${showNavbar && "black_nav box_shadow"}`}>
          {/* Logo  */}
          <div className="logo">
            {/* if showNavbar is true show darkLogo else show lightLogo */}
            <Link to="/">
              <img
                loading="lazy"
                src={`${showNavbar ? DarkLogo : LightLogo}`}
                alt=""
              />
            </Link>
          </div>

          {/* Seachbar  */}
          <div className="navbar_search">
            <input type="text" placeholder="let's Find" />
            <AiOutlineSearch className="search_icon" size={25} />
          </div>

          {/* Nav links  */}
          <div className="navbar_menu">
            <ul className="navbar_ul">
              <li className="navbar_li">
                <NavLink
                  activeclassname="active"
                  exact="true"
                  to="/"
                  className={`${showNavbar ? "color_white" : "color_black"}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="navbar_li">
                <NavLink
                  activeclassname="active"
                  to="/products"
                  className={`${showNavbar ? "color_white" : "color_black"}`}
                >
                  Products
                </NavLink>
              </li>
              <li className="navbar_li">
                <NavLink
                  activeclassname="active"
                  to="/services"
                  className={`${showNavbar ? "color_white" : "color_black"}`}
                >
                  Service
                </NavLink>
              </li>
            </ul>

            {/* cart  */}
            <div className="add_to_cart">
              <Link
                to="/cart"
                className={`${showNavbar ? "color_white" : "color_black"}`}
              >
                <AiOutlineShoppingCart className="cartIcon" size={25} />{" "}
              </Link>
            </div>
          </div>
          <div
            onClick={handleNavbar}
            className={`hamburger ${
              showNavbar ? "color_white" : "color_black"
            }`}
          >
            {!openHamburger ? (
              <MenuIcon className="hamburgerIcon " />
            ) : (
              <CloseIcon className="hamburgerIcon" />
            )}
            <div className="sideMenu">
              <div className="side_menu_section">
                <ul className="side_menu_ul">
                  <li className="side_menu_li">
                    <NavLink
                      activeclassname="active"
                      exact="true"
                      to="/"
                      className="color_black"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="side_menu_li">
                    <NavLink
                      activeclassname="active"
                      to="/products"
                      className="color_black"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="side_menu_li">
                    <NavLink
                      activeclassname="active"
                      to="/services"
                      className="color_black"
                    >
                      Service
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
