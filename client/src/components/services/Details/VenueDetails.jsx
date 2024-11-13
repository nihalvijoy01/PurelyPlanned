import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import './VenueDetails.css'
import imgv1 from '/src/images/v10.jpg';
import imgv2 from '/src/images/v3.jpg';
import imgv3 from '/src/images/v6.png';
import imgv4 from '/src/images/v7.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function VenueDetails() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Adjust duration as needed
    }, []);
    const navigate = useNavigate();

  return (
      <div className="containerVmain">
    <div className="containerV">
    <header>
        <nav>
            Home | Services | Details
        </nav>
    </header>
    <h1 className="vh1">Venue Selection</h1>
    <div className="hero" data-aos="zoom-in">
        <img src={imgv1} alt="Wedding Couple"/>
    </div>
    
    <div className="contentV">
        
        <div className="decorative-line">
            <span className="decorative-text">🙘🙤🙦🙚</span>
        </div>
        
        <p>DISCOVER THE PERFECT SETTING FOR YOUR LOVE STORY WITH OUR EXQUISITE VENUE SELECTION WEDDING SERVICE.</p>
    </div>

    <div className="thumbnails" data-aos="zoom-in">
        <img src={imgv2} alt="Venue Image 1"/>
        <img src={imgv3} alt="Venue Image 2"/>
        <img src={imgv4} alt="Venue Image 3"/>
    </div>

    <div className="contentV">
        
        <div className="decorative-line">
            <span className="decorative-text">🙘🙤🙦🙚</span>
        </div>
        
        <p>Discover the perfect setting for your love story with our exquisite venue selection service. 
            Immerse yourself in a world of possibilities as we guide you through a curated collection of 
            enchanting locations. Whether you envision a romantic outdoor ceremony surrounded by nature's 
            beauty or an elegant indoor celebration in a historic ballroom, our expert team ensures each venue 
            aligns with your vision.</p>
            <br /> <br />
<div className="buttonV">
<button className="btn10" onClick={()=> navigate('/login')}> Book your Venue 
</button>
<br /> <br />
</div>
    </div>
    
    </div>
    
    
</div>
  )
}

export default VenueDetails