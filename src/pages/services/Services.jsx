import React from "react";
import { Link } from "react-router-dom";
import mobile from "../../assets/mobile.png";
import cropDoc from "../../assets/crop-doc.jpg";
import "./services.scss";

const Services = ({ changeLang }) => {
  return (
    <>
      <div className="services">
        <section className="sec-1">
          <h1>{!changeLang ? "Our Services" : "हमारी सेवाएँ"}</h1>
        </section>
        <section className="sec-2">
          <div className="container one">
            <div className="left-box">
              <span>{!changeLang ? "Consult our Crop Doctor" : "हमारे फसल चिकित्सक से परामर्श करें"}</span>
              <p>
                {!changeLang
                  ? "Turn your mobile phone into crop doctor: send us picture of your crop and get diagnosis of infected crop and its solution."
                  : "अपने मोबाइल फोन को क्रॉप डॉक्टर बनाएं: हमें अपनी फसल की तस्वीर भेजें और संक्रमित फसल का निदान और उसका समाधान प्राप्त करें।"}
              </p>
            </div>
            <div className="right-box">
              <img
                style={{
                  height: "375px",
                  objectFit: "contain",
                  boxShadow: "0px 0px 20px gray",
                  borderRadius: "1rem",
                }}
                src={cropDoc}
                alt=""
              />
            </div>
          </div>
          <div className="container two">
            <div className="left-box">
              <Link to="/services/cropPrice">
                <span>{!changeLang ? "Predict Crop Price" : "फसल मूल्य की भविष्यवाणी करें"}</span>
              </Link>
              <p>
                {!changeLang
                  ? "Predict the crop and veggies price based on real-time data, historical data and market requirements."
                  : "वास्तविक समय के डेटा, ऐतिहासिक डेटा और बाजार की आवश्यकताओं के आधार पर फसल और सब्जियों की कीमत का अनुमान लगाएं।"}
              </p>
            </div>

            <div className="right-box">
              <img src={mobile} alt="" />
            </div>
          </div>
          <div className="container three">
            <div className="left-box">
              <span>{!changeLang ? "Hi-Tech Drone Spray" : "हाई-टेक ड्रोन स्प्रे"}</span>
              <p>
                {!changeLang
                  ? "Predict the crop and veggies price based on real-time data, historical data and market requirements"
                  : "वास्तविक समय के डेटा, ऐतिहासिक डेटा और बाजार की आवश्यकताओं के आधार पर फसल और सब्जियों की कीमत का अनुमान लगाएं ।"}
                .
              </p>
            </div>
            <div className="right-box">
              <img src={mobile} alt="" />
            </div>
          </div>
          <div className="container four">
            <div className="left-box">
              <Link to="/services/checkDisease">
                <span>{!changeLang ? "Crop Health Monitoring" : "फसल स्वास्थ्य निगरानी"}</span>
              </Link>
              <p>
                {!changeLang
                  ? "Turn your mobile phone into crop doctor: send us picture of your crop and get diagnosis of infected crop and its solution."
                  : "अपने मोबाइल फोन को क्रॉप डॉक्टर बनाएं: हमें अपनी फसल की तस्वीर भेजें और संक्रमित फसल का निदान और उसका समाधान प्राप्त करें।"}
              </p>
            </div>
            <div className="right-box">
              <img src={mobile} alt="" />
            </div>
          </div>
          <div className="container five">
            <div className="left-box">
              <span>{!changeLang ? "Soil Health Testing" : "मृदा स्वास्थ्य परीक्षण"}</span>
              <p>
                {!changeLang
                  ? "Predict the crop and veggies price based on real-time data,historical data and market requirements."
                  : "वास्तविक समय के डेटा, ऐतिहासिक डेटा और बाजार की आवश्यकताओं के आधार पर फसल और सब्जियों की कीमत का अनुमान लगाएं।"}
              </p>
            </div>
            <div className="right-box">
              <img src={mobile} alt="" />
            </div>
          </div>
        </section>
        <section className="sec-3">
          <div className="container">
            <div className="upper-box">
              <span>{!changeLang ? "Additional Features" : "अतिरिक्त सुविधाओं"}</span>
            </div>
            <div className="lower-box">
              <div className="box">
                <div className="blank"></div>
                <span>{!changeLang ? "Weather Info" : "मौसम की जानकारी"}</span>
              </div>
              <div className="box">
                <div className="blank"></div>
                <span>{!changeLang ? "Organic Farming" : "जैविक खेती"}</span>
              </div>
              <div className="box">
                <div className="blank"></div>
                <span>{!changeLang ? "Cold Storage" : "शीतगृह"}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
