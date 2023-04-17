import React from "react";
import "./about.scss";
import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.png";
import about3 from "../../assets/about-3.png";

const About = () => {
  return (
    <div className="about">
      <section className="sec-1">
        <div className="left">
          <div className="content">
            <div className="intro">
              <span>About Us</span>
              <p>
                Welcome to Farmicon, where we're transforming the agriculture
                industry through innovative technology solutions. Our startup
                was founded in 2021 with a mission to empower farmers with
                advanced farming tools that increase efficiency, productivity,
                and profitability.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={about1} className="img-1" alt="" />
          <img src={about2} className="img-2" alt="" />
          <img src={about3} className="img-3" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
