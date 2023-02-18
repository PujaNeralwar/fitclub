import React from 'react'
import Header from '../Header/Header';
import Heart from '../../assets/heart.png' 
import hero_image from '../../assets/gym.jpg'
import hero_image_back from '../../assets/hero_image_back.png'

import './Hero.css';
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
       <Header/>

      <div className="the-best-ad">
        <div></div>
        <span>the best fitness club in town</span>
      </div>

      {/* hero Heading */}
      <div className="hero-text">
         <div>
          <span>Shape </span>
          <span>Your</span>
         </div>

         <div>
          <span className="stroke">Ideal body</span>
         </div>
      

      <div>
      <span>
      Here we will help you develop your 
      body <br></br>into a Strong fit Muscular body
      </span>
      </div>
    </div> 

    {/* Figures */}
    <div className="figures">
      <div>
       <span>+150</span>
       <span>Expert coaches</span>
      </div>

      <div>
        <span>+600</span>
        <span>Members join</span>
      </div>

      <div>
      <span>+50</span>
      <span>Fitness programs</span>
      </div>
    </div>

      {/* Hero buttons */}
      <div className="hero-buttons">
      <button className="btn">Get Started</button>
      <button className="btn">Learn More</button>
      </div>
   </div>
      <div className="right-h">
       <button className="btn">Join Now</button>
       <div className="heart-rate">
        <img src={Heart} alt=""/>
        <span>Heart Rate</span><span>102bpm</span>
       </div>

       {/* hero image */}
       <img src={hero_image} alt="" className="hero-image"/>
       <img src={hero_image_back} alt="" className="hero-image-back"/>
      </div>
    </div>
  )
}

export default Hero

