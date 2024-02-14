import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import mobile from "../../assets/mobile.png";
import cropDoc from "../../assets/crop-doc2.png";
// import cropPrice from "../../assets/crop-price2.png";
import cropPrice from "../../assets/cropPrice.png";
// import cropHealth from "../../assets/crop-health2.png";
import cropHealth from "../../assets/crop_health.jpg";
import drone from "../../assets/drone2.png";
// import drone from "../../assets/hi-tech_drone.jpg";
import soilHealth from "../../assets/soil-health2.png";
import lining from "../../assets/lining.png";
import "./services.scss";
import organicFarming from "../../assets/organic_farming.jpg";
import WeatherInfo from "../../assets/Weather_info.jpg"
import coldStorage from "../../assets/coldStorage.jpg";

const Services = ({ changeLang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="services">
        <section className="sec-1">
          <h1>{!changeLang ? "Our Services" : "हमारी सेवाएँ"}</h1>
        </section>
        <section className="sec-2">
          {/* <img className="lining-1" src={lining} alt="" /> */}
          {/* <img className="lining-2" src={lining} alt="" /> */}
          {/* <img className="lining-3" src={lining} alt="" /> */}
          {/* <img className="lining-4" src={lining} alt="" /> */}
          {/* <img className="lining-5" src={lining} alt="" /> */}
          <div className="container one">
            <div className="left-box">
              <span>
                {!changeLang
                  ? "Crop Doctor"
                  : "फसल चिकित्सक"}
              </span>
              <p>
                {!changeLang
                  ? "Turn your mobile phone into crop doctor: send us picture of your crop and get diagnosis of infected crop and its solution."
                  : "अपने मोबाइल फोन को क्रॉप डॉक्टर बनाएं: हमें अपनी फसल की तस्वीर भेजें और संक्रमित फसल का निदान और उसका समाधान प्राप्त करें।"}
              </p>
              <Link to="/services/checkDisease" className="">Consult Now</Link>
            </div>
            <div className="right-box">
              <img  src={cropDoc} alt="" />
            </div>
          </div>
          <div className="container two">
            <div className="left-box">
               
                <span>
                  {!changeLang
                    ? "Predict Crop Price"
                    : "फसल मूल्य की अनुमान लगाए"}
                </span>
               
              <p>
                {!changeLang
                  ? "Predict the crop and veggies price based on real-time data, historical data and market requirements."
                  : "वास्तविक समय के डेटा, ऐतिहासिक डेटा और बाजार की आवश्यकताओं के आधार पर फसल और सब्जियों की कीमत का अनुमान लगाएं।"}
              </p>
              <Link className="buttton" to="/services/cropPrice">Predict Now</Link>
            </div>

            <div className="right-box">
              <img src={cropPrice} alt="" />
            </div>
          </div>
          <div className="container three">
            <div className="left-box">
              <span>
                {!changeLang ? "Hi-Tech Drone Spray" : "हाई-टेक ड्रोन स्प्रे"}
              </span>
              <p>
                {!changeLang
                  ? "Predict the crop and veggies price based on real-time data, historical data and market requirements"
                  : "वास्तविक समय के डेटा, ऐतिहासिक डेटा और बाजार की आवश्यकताओं के आधार पर फसल और सब्जियों की कीमत का अनुमान लगाएं ।"}
                .
              </p>
              <Link className="buttton" to="/services/drone">Book Now</Link>
            </div>
            <div className="right-box">
              <img src={drone} style={{width: "300px"}} alt="" />
            </div>
          </div>
          {/* <div className="container four">
            <div className="left-box">
               
                <span>
                  {!changeLang
                    ? "Crop Health Monitoring"
                    : "फसल स्वास्थ्य निगरानी"}
                </span>
              
              <p>
                {!changeLang
                  ? "Turn your mobile phone into crop doctor: send us picture of your crop and get diagnosis of infected crop and its solution."
                  : "अपने मोबाइल फोन को क्रॉप डॉक्टर बनाएं: हमें अपनी फसल की तस्वीर भेजें और संक्रमित फसल का निदान और उसका समाधान प्राप्त करें।"}
              </p>
              <Link className="buttton" to="/services/cropHealth">Know More</Link>
            </div>
            <div className="right-box">
              <img src={cropHealth} alt="" />
            </div>
          </div> */}
          <div className="container five">
            <div className="left-box">
              <span>
                {!changeLang ? "Soil Health Testing" : "मृदा स्वास्थ्य परीक्षण"}
              </span>
              <p>
                {!changeLang
                  ? "Predict the crop and veggies price based on real-time data,historical data and market requirements."
                  : "वास्तविक समय के डेटा, ऐतिहासिक डेटा और बाजार की आवश्यकताओं के आधार पर फसल और सब्जियों की कीमत का अनुमान लगाएं।"}
              </p>
              <Link className="buttton" to="/services/soilHealth">Book Now</Link>
            </div>
            <div className="right-box">
              <img src={soilHealth} alt="" />
            </div>
          </div>
        </section>
        <section className="sec-3">
          <div className="container">
            <div className="upper-box">
              <span>
                {!changeLang ? "Additional Features" : "अतिरिक्त सुविधाएँ"}
              </span>
            </div>
            <div className="lower-box">
              <div className="box">
                <div className="WeatherInfo">
                <img src={WeatherInfo} alt="" />
                </div>
                <Link to={"/weather"}>{!changeLang ? "Weather Info" : "मौसम की जानकारी"}</Link>
              </div>
              <div className="box">
                <div className="organicFarming">
                <img src={organicFarming} alt="" />
                </div>
                <span>{!changeLang ? "Organic Farming" : "जैविक खेती"}</span>
              </div>
              <div className="box">
                <div className="coldStorage">
                  <img src={coldStorage} alt="" />
                </div>
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
