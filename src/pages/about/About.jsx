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
              <p>
                At Farmicon, we understand the challenges farmers face in the
                modern world. That's why we've developed a suite of smart
                farming solutions that leverage cutting-edge technology to help
                farmers achieve their goals. Our solutions include precision
                agriculture tools, crop monitoring systems, soil analysis
                technologies, and drone-based surveying systems, all of which
                are powered by artificial intelligence, machine learning, and
                the Internet of Things (IoT).
              </p>
              <p>
                Our precision agriculture tools offer farmers real-time insights
                into their crops, soil conditions, and weather patterns. With
                these tools, farmers can make data-driven decisions that
                optimize yields, reduce costs, and improve sustainability. Our
                crop monitoring systems use drones imagery to provide farmers
                with accurate and up-to-date information on the health and
                growth of their crops.
              </p>
              <p>
                We also offer soil analysis technologies that help farmers
                determine the right nutrients and fertilizers needed for their
                crops. Our drone-based surveying systems can quickly and
                efficiently survey large areas of farmland, providing farmers
                with valuable data on soil health, water management, and crop
                growth.
              </p>
              <p>
                At Farmicon, we're committed to making agriculture more
                efficient, productive, and sustainable. Our solutions are
                designed to help farmers make the most of their resources while
                reducing waste and environmental impact. We believe that by
                empowering farmers with the right technology tools, we can help
                transform the agriculture industry and improve food security for
                all.
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
      <hr />
    </div>
  );
};

export default About;
