import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import './VenueDetails.css'
import imgs2 from '/src/images/s1.jpg';
import imgs3 from '/src/images/s6.png';
import imgs1 from '/src/images/m2crop.png';
import imgs4 from '/src/images/food4_1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MakeupDetails() {

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
    <h1 className="vh1">Bridal Makeup</h1>
    <div className="hero" data-aos="zoom-in">
        <img src={imgs1} alt="Wedding Couple"/>
    </div>
    
    <div className="contentV">
        
        <div className="decorative-line">
            <span className="decorative-text">💄👰💍💄</span>
        </div>
        
        <p>ENHANCE YOUR BEAUTY WITH OUR ELEGANT AND PROFESSIONAL BRIDAL MAKEUP SERVICE.</p>
    </div>

    <div className="thumbnails" data-aos="zoom-in">
        <img src={imgs2} alt="Venue Image 1"/>
        <img src={imgs3} alt="Venue Image 2"/>
        <img src={imgs1} alt="Venue Image 3"/>
    </div>

    <div className="contentV">
        
        <div className="decorative-line">
            <span className="decorative-text">💄👰💍💄</span>
        </div>
        
        <p>Experience the ultimate transformation for your special day with our expert bridal makeup services. 
                        Our team of professional makeup artists will work with you to create a look that complements your style, 
                        whether you envision a natural glow, a glamorous appearance, or a bold statement. We ensure that every 
                        detail enhances your unique beauty, making you feel radiant on your wedding day.</p>
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

export default MakeupDetails;