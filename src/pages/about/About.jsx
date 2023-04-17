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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede.
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
