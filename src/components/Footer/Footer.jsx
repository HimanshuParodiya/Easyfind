import React from 'react'
import './Footer.css'
import { FcPhone } from 'react-icons/fc'
import { BiLogoGmail } from 'react-icons/bi'
import { BsFillBuildingsFill } from 'react-icons/bs'
import FooterLogo from '/src/assets/Logo/EasyFindDarkLogo.png'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer_center_details">

        <div className="footer_logo_name">

          <div className="footer_logo">
            <img src={FooterLogo} alt="" />
          </div>

          <div className="footer_name">
            <h1>EasyFind</h1>
          </div>

        </div>

    <div className='divider' />

        <div className="footer_contacts">

          <div className="footer_contact footerContact_phone">
            <FcPhone size={20} className='footer_phone_icon footer_contact_Icon' /> :
            +91 0000000000
          </div>
          
          <div className="footer_contact footerContact_email">
            <BiLogoGmail size={20} className='footer_email_icon footer_contact_Icon' /> :
            easyfind@support.com
          </div>
          
          <div className="footer_contact footerContact_email">
            <BsFillBuildingsFill size={20} className='footer_address_icon footer_contact_Icon' /> :
            easyfind@support.com
          </div>

        </div>

      </div>
      <div className="footer_bottom">Copyright © 2023 by Himanshu. All rights reserved.</div>
    </div>
  )
}

export default Footer
