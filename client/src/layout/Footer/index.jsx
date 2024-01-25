import React from 'react'
import './Footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="upBox">
        <div className="footerCart">
          <p>ABOUT US</p>
          <span style={{ maxWidth: '300px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</span>
        </div>
        <div className="footerCart">
          <p>QUICK LINKS</p>
          <span>ABOUT US</span>
          <span>Services</span>
          <span>Testimonials</span>
          <span>Contact Us</span>
        </div>
        <div className="footerCart">
          <p>FOLLOW US</p>
          <div className="icons">
            <i> <FaFacebookF /></i>
            <i> <FaTwitter /></i>
            <i><FaLinkedinIn /></i>
            <i>  <FaInstagram /></i>
          </div>
        </div>
        <div className="footerCart">
          <p>FEATURED PRODUCT</p>
          <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
          <h3>Leather Brown Shoe</h3>
          <p>$60.00</p>
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="downBox">
      Copyright ©2024 All rights reserved | This template is made with  by Ali.ismayıl_
      </div>
    </footer>
  )
}

export default Footer
