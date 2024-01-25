import React from "react";
import "./TeamSection.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function TeamSection() {
  return (
    <section id="teamSection">
      <div className="upBox">
        <p>TEAM</p>
        <span>Leadership</span>
      </div>
      <div className="downBox">
        
        <div className="cart">
          <img
            src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
            alt=""
          />
          <h3>John Rooster</h3>
          <p>CO-FOUNDER, PRESIDENT</p>
          <span>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </span>
          <div className="iconBox">
          <div className="icon">
          <FaFacebookF />
          </div>
          <div className="icon">
          <FaTwitter />
          </div>
          <div className="icon">
          <FaLinkedinIn />
          </div>
          <div className="icon">
          <FaInstagram />
          </div>
        </div>
        </div>
      
        <div className="cart">
          <img
            src="https://preview.colorlib.com/theme/selling/images/person_3.jpg"
            alt=""
          />
          <h3>Tom Sharp</h3>
          <p>CO-FOUNDER, COO</p>
          <span>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </span>
          <div className="iconBox">
          <div className="icon">
          <FaFacebookF />
          </div>
          <div className="icon">
          <FaTwitter />
          </div>
          <div className="icon">
          <FaLinkedinIn />
          </div>
          <div className="icon">
          <FaInstagram />
          </div>
        </div>
        </div>
        <div className="cart">
          <img
            src="https://preview.colorlib.com/theme/selling/images/person_4.jpg"
            alt=""
          />
          <h3>Winston Hodson</h3>
          <p>MARKETING</p>
          <span>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </span>
          <div className="iconBox">
          <div className="icon">
          <FaFacebookF />
          </div>
          <div className="icon">
          <FaTwitter />
          </div>
          <div className="icon">
          <FaLinkedinIn />
          </div>
          <div className="icon">
          <FaInstagram />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
