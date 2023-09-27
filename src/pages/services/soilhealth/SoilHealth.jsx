import React from 'react'
import { useEffect } from 'react';
import Soil from "../../../assets/soilhealth.png";
import Soil2 from "../../../assets/soil2.png";
import "./soilhealth.scss"

const SoilHealth = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <div className='soilhealth'>
        <div className='sec-1'>
            <h1>Soil-Health Testing</h1>
            <h2>Soil Testing Lab Services: Empowering Informed Farming</h2>
            <p>Welcome to FARMICON's Soil Testing Lab Services – your gateway to smarter, more efficient farming. We understand that the foundation of a successful crop begins with healthy soil. With our extensive network of soil testing labs, we offer farmers a convenient and data-driven approach to soil analysis, enabling you to make informed decisions about your land's health and productivity.</p>
        </div>
        <div className='sec-2'>
            <div className='container'>
                <div className='left'>
                    <span>Accessing Nearby Soil Testing Labs</span>
                    <p>The network of soil testing labs is strategically located to ensure accessibility for farmers across regions. We've made it easier than ever for you to get your soil tested and receive comprehensive reports on its condition. Here's how it works:</p>
                    <div className='list'>
                        <p><em>Collect Your Soil Sample:</em> Begin by collecting soil samples from your fields. Follow our simple guidelines to ensure accurate and representative samples.</p>
                        <p><em>Find the Nearest Lab:</em>Find the Nearest Lab: Use our user-friendly interface to locate the nearest soil testing lab in your area. We have a wide network of lab partners ready to serve you.</p>
                        <p><em>Book Your Slot:</em> Reserve your preferred slot at the lab for soil testing. Our flexible scheduling system ensures that you can plan your visit at your convenience.</p>
                        <p><em>Submit Your Sample:</em> Visit the chosen lab on your scheduled date and submit your soil sample. Our trained professionals will handle the rest.</p>
                        <p><em>Receive Detailed Reports:</em> Within a short time, you'll receive detailed reports on your soil's health, nutrient levels, and pH, helping you understand your land better.</p>
                    </div>

                </div>
                <div className='right'>
                    <img src={Soil}  />
                </div>

            </div>

        </div>
        <div className='sec-3'>
            <h2>Empowering Informed Decisions</h2>
            <p>The soil testing lab services empower you to make informed decisions about your farming practices:</p>
            <div className='list'>
                <p><em>Optimize Fertilization:</em> Tailor your fertilization strategy based on nutrient deficiencies, reducing costs and improving crop health.</p>
                <p><em>pH Management:</em> Understand your soil's pH levels and make adjustments to ensure optimal growing conditions for your crops.</p>
                <p><em>Enhanced Yields:</em> Targeted soil management leads to increased yields, ensuring the best return on your investment.</p>

            </div>

        </div>
        <div className='sec-4'>
            <div className='container'>
                <div className='left'>
                    <span>Join the Soil Health Revolution</span>
                    <p>FARMICON's commitment to data-driven precision farming extends to our soil testing lab services. Join us in harnessing the power of information to cultivate healthier, more productive crops.</p> 

                </div>
                <div className='right'>
                    <img src={Soil2}/>

                </div>

            </div>

        </div>
        <div className="sec-5">
          <h1>Book your Slot now</h1>

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
          <h2 className="heading2">Testing Information</h2>
          <div className="form">
            <div className="left">
                <div>
                    <p>Preferred Lab</p>
                    <input placeholder="Select your preferred lab"/>
                </div>

            </div>
            <div className="right">
                <div>
                    <p>Date</p>
                    <input placeholder="Select your preferred date for testing"/>
                </div>

            </div>
          </div>
          <button>Book Now</button>
        </div>

    </div>
    </>
  )
}

export default SoilHealth