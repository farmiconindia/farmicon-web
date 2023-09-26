import React from 'react'
import { useEffect } from 'react'
import Crop from "../../../assets/crophealth.png"
import "./cropHealth.scss"




const CropHealth = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <div className='crophealth'>
        <section className='sec-1'>
            <div className='container'>
                <div className='left'>
                    <span>Crop Health Monitoring System</span>
                    <p>At FARMICON, we understand the vital role that healthy crops play in sustaining agriculture and feeding the world's growing population. That's why we've developed an innovative Crop Health Monitoring System designed to empower farmers with real-time insights and data-driven solutions for optimizing crop health and yield.</p>
                    <span>The Challenge</span>
                    <p>Modern farmers face numerous challenges in maintaining the health and productivity of their crops. Traditional methods often fall short in providing timely and accurate information about crop conditions, leading to decreased yields, increased costs, and environmental concerns. With the ever-growing demand for food, the need for efficient and sustainable farming practices has never been more critical.</p>
                    <span>FARMICON's Crop Health Monitoring System</span>
                    <p>The Crop Health Monitoring System is engineered to address these challenges head-on. With a focus on precision, efficiency, and sustainability, our system leverages cutting-edge technology to provide farmers with the tools they need to make informed decisions about their crops.</p>

                </div>
                <div className='right'>
                    <img src={Crop}/>
                </div> 
            </div> 
        </section>
        <section className='sec-2'>
            <h1>How it works</h1>
            <div className='list'>
                 
                    <p><em>Data Collection:</em> Our system collects real-time data from various sources, including sensors, drones, and IoT devices.</p>
                    <p><em>AI-Driven Analysis:</em> Advanced artificial intelligence algorithms process the data to identify crop health issues, pests, diseases, and nutrient deficiencies.</p>
                    <p><em>User-Friendly Interface:</em> Farmers can access the analysis results and recommendations through an intuitive and user-friendly interface via the FARMICON app or web portal</p>
                    <h2>Benefits to Farmers</h2>
                    <p><em>Increased Yield:</em> Timely and accurate insights enable farmers to take proactive measures to enhance crop health and maximize yields.</p>
                    <p><em>Reduced Costs:</em> By targeting specific issues, our system reduces the need for excessive pesticide and fertilizer use, saving both money and resources.</p>
                    <p><em>Sustainability:</em> FARMICON is committed to promoting sustainable farming practices by minimizing environmental impact and encouraging responsible resource management.</p>
                 
            </div>

        </section>
    </div>
    </>
  )
}

export default CropHealth