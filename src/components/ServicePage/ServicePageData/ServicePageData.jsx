import React from "react";
import "./ServicePageData.css";
import { motion } from "framer-motion"

const ServicePageData = ({ icon, sNo, divider, content, description , descriptionAnimation}) => {

  return (
    <>
      <div className="serviceData_container">
        <div  className="icon_serialNo">
          <motion.div animate={{x: -100}} whileInView={{x: -10}} transition={{duration: 0.5}} className="service_serialNo">{sNo}</motion.div>
          <motion.div animate={{x: 100}} whileInView={{x: 10}} transition={{duration: 0.5}} className="service_image">{icon}</motion.div>
        </div>
        {/* <div className="divider_description"> */}
        <div    style={{flexDirection: `${content}`}} className="divider_description">
          <div style={{justifyContent: `${divider}`}} className="divider_container">
            <div  className="divider" ></div>
          </div>
          <div className="serviceData_description">
            <motion.p animate={{x: `${descriptionAnimation}px`, opacity:0}} whileInView={{x: 0, opacity:1}} transition={{duration: 0.7}}>

             {description}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );    
};

export default ServicePageData;
