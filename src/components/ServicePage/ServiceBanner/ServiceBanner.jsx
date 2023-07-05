import React, { useEffect, useRef } from "react";
import "./ServiceBanner.css";
import ServiceBannerImage from "/src/assets/Service/servicePageBanner.png";
import { motion } from "framer-motion";
import Typed from "typed.js";

const ServiceBanner = () => {
    const word = useRef(null)

    useEffect(()=>{
        const typed = new Typed(word.current, {
            strings: ["Fast", "Reliable","and Secure"],
            startDelay: 150,
            typeSpeed: 150,
            backDelay: 150,
            backSpeed: 150,
            smartBackspace: true,
            showCursor: false,
            loop: true,
            // fadeOut: true,  
        })
    })
  return (
    <div className="service_banner">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="service_banner_heading"
      >
       Our <span className="typedWord" ref={word}> </span> Servers Ensure a Flawless Shopping Journey.
      </motion.h1>
      <img src={ServiceBannerImage} alt="Delivery image" />
    </div>
  );
};

export default ServiceBanner;
