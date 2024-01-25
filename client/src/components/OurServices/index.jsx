import React from 'react'
import './OurServices.scss'
import { IoPieChartSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoMdCloudDone } from "react-icons/io";

function OurServices() {
  return (
    <section id='ourServices'>
      <div className="upBox">
        <p>OUR SERVICES</p>
        <span>We Offer Services</span>
      </div>
      <div className="downBox">
        <div className="cart">
          <div className="imgBox">
            <IoPieChartSharp />
          </div>
          <div className="textBox">
            <p>Business Consulting</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
            </span>

            <button>Learn More</button>
          </div>
        </div>
        <div className="cart">
          <div className="imgBox">
          <FaDeleteLeft />
          </div>
          <div className="textBox">
            <p>Market Analysis</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
            </span>

            <button>Learn More</button>
          </div>
        </div>
        <div className="cart">
          <div className="imgBox">
          <FaRegClock />
          </div>
          <div className="textBox">
            <p>
User Monitoring</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
            </span>

            <button>Learn More</button>
          </div>
        </div>
        <div className="cart">
          <div className="imgBox">
          <FaCheckSquare />
          </div>
          <div className="textBox">
            <p>Seller Consulting</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
            </span>

            <button>Learn More</button>
          </div>
        </div>
        <div className="cart">
          <div className="imgBox">
          <IoBag />
          </div>
          <div className="textBox">
            <p>Financial Investment</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
            </span>

            <button>Learn More</button>
          </div>
        </div>
        <div className="cart">
          <div className="imgBox">
          <IoMdCloudDone />
          </div>
          <div className="textBox">
            <p>Financial Management</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
            </span>

            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
