import React from 'react'
import './Home.css'
import BagImage from '/src/assets/Home/Bag.jpg'
import MouseImg from '/src/assets/Home/Mouse.jpg'
import HeadPhones from '/src/assets/Home/HeadPhones.jpg'
import GamingHeadPhones from '/src/assets/Home/GamingHeadphones.jpg'
import Shoes from '/src/assets/Home/Shoe.jpg'
// import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {


  let imageArray = [BagImage, MouseImg, HeadPhones, GamingHeadPhones, Shoes]
  return (
    <div className="home">
      <div className="homeBanner">
      <Carousel  infiniteLoop="true" autoPlay="500"  className='carousel'>
      {
          imageArray.map((image, index)=>{
            return <img key={index}  className='homeBannerImage' src={image} alt="cant find" />
          })
        }
            
            </Carousel>
      </div>

    </div>
  )
}

export default Home
