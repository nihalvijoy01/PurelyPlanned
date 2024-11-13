import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './VenueDetails.css';
import imgp1 from '/src/images/cam2.png';
import imgp2 from '/src/images/s5.png';
import imgp4 from '/src/images/s7.png';
import imgp3 from '/src/images/v5.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PhotographyDetails() {

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
    <h1 className="vh1">PHOTOGRAPHY</h1>
    <div className="hero" data-aos="zoom-in">
        <img src={imgp1} alt="Wedding Couple"/>
    </div>
    
    <div className="contentV">
        
        <div className="decorative-line">
            <span className="decorative-text">📸💍🎉📸</span>
        </div>
        
        <p>CAPTURE EVERY MOMENT WITH OUR PROFESSIONAL WEDDING PHOTOGRAPHY SERVICES.</p>
    </div>

    <div className="thumbnails" data-aos="zoom-in">
        <img src={imgp2} alt="Venue Image 1"/>
        <img src={imgp3} alt="Venue Image 2"/>
        <img src={imgp4} alt="Venue Image 3"/>
    </div>

    <div className="contentV">
        
        <div className="decorative-line">
            <span className="decorative-text">📸💍🎉📸</span>
        </div>
        
        <p>Relive every magical moment of your special day with our wedding photography service. 
           Our skilled photographers are dedicated to capturing every smile, tear, and laugh in stunning detail, 
           creating a beautiful visual story of your wedding day. Whether it's candid shots, posed portraits, 
           or artistic compositions, we make sure that every memory is preserved for you to cherish forever.</p>
            <br /> <br />
<div className="buttonV">
<button className="btn10" onClick={()=> navigate('/login')}> Make your selection
</button>
<br /> <br />
</div>
    </div>
    
    </div>
    
    
</div>
  )
}

export default PhotographyDetails;
