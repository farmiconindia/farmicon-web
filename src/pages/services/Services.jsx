import React from "react";
import { Link } from "react-router-dom";
import mobile from "../../assets/mobile.png";
import cropDoc from "../../assets/crop-doc.jpg";
import "./services.scss";

const Services = () => {
  return (
    <>
      <div className="services">
        <section className="sec-1">
          <h1>Our Services</h1>
        </section>
        <section className="sec-2">
          <div className="container one">
            <div className="left-box">
              <span>Consult our Crop Doctor</span>
              <p>
                Turn your mobile phone into crop doctor: send us picture of your
                crop and get diagnosis of infected crop and its solution.
              </p>
              <div className="blog-more">
                <Link to={``} className="">
                  Read More
                </Link>
              </div>
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
                <span>Predict Crop Price</span>
              </Link>
              <p>
                Predict the crop and veggies price based on real-time data,
                historical data and market requirements.
              </p>
              <div className="blog-more">
                <Link to="/services/cropPrice">Read More</Link>
              </div>
            </div>

            <div className="right-box">
              <img src={mobile} alt="" />
            </div>
          </div>
          <div className="container three">
            <div className="left-box">
              <span>Hi-Tech Drone Spray</span>
              <p>
                Predict the crop and veggies price based on real-time data,
                historical data and market requirements.
              </p>
              <div className="blog-more">
                <Link to="/services/cropPrice">Read More</Link>
              </div>
            </div>
            <div className="right-box">
              <img src={mobile} alt="" />
            </div>
          </div>
          <div className="container four">
            <div className="left-box">
              <Link to="/services/checkDisease">
                <span>Crop Health Monitoring</span>
              </Link>
              <p>
                Turn your mobile phone into crop doctor: send us picture of your
                crop and get diagnosis of infected crop and its solution.
              </p>
              <div className="blog-more">
                <Link to="/services/cropPrice">Read More</Link>
              </div>
            </div>
            <div className="right-box">
              <img src={mobile} alt="" />
            </div>
          </div>
          <div className="container five">
            <div className="left-box">
              <span>Soil Health Testing</span>
              <p>
                Predict the crop and veggies price based on real-time data,
                historical data and market requirements.
              </p>
              <div className="blog-more">
                <Link to="/services/cropPrice">Read More</Link>
              </div>
            </div>
            <div className="right-box">
              <img src={mobile} alt="" />
            </div>
          </div>
        </section>
        <section className="sec-3">
          <div className="container">
            <div className="upper-box">
              <span>Additional Features</span>
            </div>
            <div className="lower-box">
              <div className="box">
                <div className="blank"></div>
                <span>Weather Info.</span>
              </div>
              <div className="box">
                <div className="blank"></div>
                <span>Organic Farming</span>
              </div>
              <div className="box">
                <div className="blank"></div>
                <span>Cold Storage</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
