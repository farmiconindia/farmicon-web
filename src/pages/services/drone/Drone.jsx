import React from "react";
import { useEffect } from "react";
import Drone3 from "../../../assets/drone3.png";
import "./drone.scss";

const Drone = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <div className="drone">
        <section className="sec-1">
          <h1>Hi-Tech Drone Spray</h1>
          <div className="container">
            <div className="left">
              <span>Drone Booking: Transforming Crop Care with FARMICON</span>
              <p>
                Welcome to the future of precision farming with FARMICON's Drone
                Booking service. Booking a drone for crop spraying has never
                been easier. We're here to streamline the process and help you
                achieve healthier crops with just a few simple steps
              </p>
              <span>Booking Your Drone: Easy as 1-2-3</span>
              <p>
                Provide Your Basic Details, That's it! Once you provide these
                details, we'll handle the rest. Our advanced agricultural drones
                will be dispatched to your location on the chosen date, equipped
                with the precise chemicals and technology needed for your crop
              </p>
            </div>
            <div className="right">
              <img src={Drone3} />
            </div>
          </div>
        </section>
        <section className="sec-2">
          <div className="box">
            <div className="content">
              <h1>Why Choose FARMICON's Drone Booking?</h1>
              <div className="list">
                <p>
                  <em>· Precision Spraying:</em> Our drones ensure every drop
                  target, delivering precise and even coverage.
                </p>
                <p>
                  <em>· Time and Cost Savings:</em> Say goodbye to manual labor
                  and hello to efficient drone-based spraying.
                </p>
                <p>
                  <em>· Environmental Responsibility:</em> Reduce chemical
                  runoff and promote sustainable farming practices.
                </p>
                <p>
                  <em>· Improved Crop Health:</em> Uniform spraying means
                  healthier, more productive crops.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-3">
          <p>
            Book your drone today, and experience the future of farming. At
            FARMICON, we're committed to helping you nurture your crops to their
            fullest potential. Let's transform agriculture together, one drone
            booking at a time.
          </p>
          <h1>Book your Drone now</h1>

          <h2>Personal Information</h2>
          <div className="form">
            <div className="left">
              <div>
                <p>Name</p>
                <input placeholder="Enter your name" />
              </div>
              <div>
                <p>Village</p>
                <input placeholder="Enter your village name" />
              </div>
              <div>
                <p>State</p>
                <input placeholder="Select a state" />
              </div>
            </div>

            <div className="right">
              <div>
                <p>Contact Number</p>
                <input placeholder="Enter your Contact Number" />
              </div>
              <div>
                <p>District</p>
                <input placeholder="Enter your District" />
              </div>
            </div>
          </div>
          <h2 className="heading2">Crop Details (For Spray)</h2>
          <div className="form">
            <div className="left">
                <div>
                    <p>Crop Name</p>
                    <input placeholder="Enter your Crop Name"/>
                </div>
                <div>
                    <p>Preferred Date</p>
                    <input placeholder="Select your preferred date for spray"/>
                </div>

            </div>
            <div className="right">
                <div>
                    <p>Land Size</p>
                    <input placeholder="Enter your land size"/>
                </div>

            </div>
          </div>
          <button>Book Now</button>
        </section>
      </div>
    </>
  );
};

export default Drone;
