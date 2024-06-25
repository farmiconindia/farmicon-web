import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../assets/fb-icon.png';
import linkedin from '../../assets/linkedin-icon.png';
import insta from '../../assets/insta-icon.png';
import twitter from '../../assets/twitter-icon.png';
import yt from '../../assets/yt-icon.png';
import googlePlay from '../../assets/google-play.png';
import './footer.scss';

const Footer = ({ changeLang }) => {
  return (
    <div className="footer" id="footer">
      <div className="upper-box">
        <div className="first-box">
          <div className="brand">
            <div className="logo"></div>
            <span>{!changeLang ? "Farmicon" : "फार्मिकॉन"}</span>
          </div>
          <div className="socials">
            <img src={fb} alt="Facebook" />
            <img src={linkedin} alt="LinkedIn" />
            <img src={insta} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={yt} alt="YouTube" />
          </div>
        </div>
        <div className="second-box">
          <span>Shipping and Refund</span>
          <span>FAQs</span>
          <span>Payment Methods</span>
        </div>
        <div className="third-box" style={{ marginTop: "50px" }}>
          <span>Address:</span>
          <div className="add-desc">
            <span>
              I-3, Tides Business Incubator
              IIT Roorkee
              Roorkee, Uttarakhand
              247667
            </span>
          </div>
        </div>
        <div className="fourth-box">
          <div className="upper">
            <span>Contact Us:</span>
            <div className="contact-desc">
              <span>farmiconindia@gmail.com</span>
              <span>+91 8650505520</span>
            </div>
          </div>
          <div className="lower">
            <img src={googlePlay} alt="Google Play" />
          </div>
        </div>
      </div>
      <div className="lower-box" style={{ marginTop: "100px" }}>
        <div className="hr" style={{ marginTop: "5px" }}>
          <hr />
        </div>
        <div className="policy">
          <Link to="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</Link>
          <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
