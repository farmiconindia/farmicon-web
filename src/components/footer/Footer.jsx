import React from "react";
import fb from "../../assets/fb-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import insta from "../../assets/insta-icon.png";
import twitter from "../../assets/twitter-icon.png";
import yt from "../../assets/yt-icon.png";
import googlePlay from "../../assets/google-play.png";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="upper-box">
          <div className="first-box">
            <div className="brand">
              <div className="logo"></div>
              <span> Farmicon</span>
            </div>
            <div className="socials">
              <img src={fb} alt="" />
              <img src={linkedin} alt="" />
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
              <img src={yt} alt="" />
            </div>
          </div>
          <div className="second-box">
            <span>Shipping and Refund</span>
            <span>FAQs</span>
            <span>Payment Methods</span>
          </div>
          <div className="third-box">
            <span>Address:</span>
            <div className="add-desc">
              <span>13, Tides Business Incubator</span>
              <span>IIT Roorkee</span>
              <span>Roorkee, Uttarakhand</span>
              <span>247667</span>
            </div>
          </div>
          <div className="fourth-box">
            <div className="upper">
              <span>Contact Us:</span>
              <div className="contact-desc">
                <span>farmiconindia@gmail.com</span>
                <span>+91-9983583593</span>
              </div>
            </div>
            <div className="lower">
              <img src={googlePlay} alt="" />
            </div>
          </div>
        </div>
        <div className="lower-box">
          <div className="hr">
            <hr />
          </div>

          <div className="policy">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Content Policy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
