import React from 'react'
import './HomeBanner.css'
import BagImage from '/src/assets/Home/Bag.jpg'
import MouseImg from '/src/assets/Home/Mouse.jpg'
import HeadPhones from '/src/assets/Home/HeadPhones.jpg'
import GamingHeadPhones from '/src/assets/Home/GamingHeadphones.jpg'
import Shoes from '/src/assets/Home/Shoe.jpg'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeBanner = () => {


  let imageArray = [BagImage, MouseImg, HeadPhones, GamingHeadPhones, Shoes]
  return (
    <div className="homeBannerContainer">
      <div className="homeBanner">

        {/* install carousel with npm  */}
        <Carousel emulateTouch={true} infiniteLoop="true" autoPlay="500" >
          {
            // looping through the imageArray 
            imageArray.map((image, index) => {
              return <img loading='lazy' key={index} className='homeBannerImage' src={image} alt="cant find" />
            })
          }

        </Carousel>
      </div>

    </div>
  )
}

export default HomeBanner
