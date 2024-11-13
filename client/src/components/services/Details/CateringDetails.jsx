import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import './VenueDetails.css'
import imgf1 from '/src/images/food1.jpg';
import imgf2 from '/src/images/food2.jpg';
import imgf3 from '/src/images/food3.jpg';
import imgf4 from '/src/images/food4_1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CateringDetails() {

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
    <h1 className="vh1">Catering Selection</h1>
    <div className="hero" data-aos="zoom-in">
        <img src={imgf1} alt="Wedding Couple"/>
    </div>
    
    <div className="contentV">
        
        <div className="decorative-line">
            <span className="decorative-text">🍴🍲🥂🍴</span>
        </div>
        
        <p>DISCOVER THE PERFECT MENU FOR YOUR LOVE STORY WITH OUR EXQUISITE CATERING SELECTION WEDDING SERVICE.</p>
    </div>

    <div className="thumbnails" data-aos="zoom-in">
        <img src={imgf2} alt="Venue Image 1"/>
        <img src={imgf3} alt="Venue Image 2"/>
        <img src={imgf4} alt="Venue Image 3"/>
    </div>

    <div className="contentV">
        
        <div className="decorative-line">
            <span className="decorative-text">🍴🍲🥂🍴</span>
        </div>
        
        <p>Discover the perfect menu for your love story with our exquisite catering selection service. 
                        Delight in a variety of culinary experiences as we present a curated selection of gourmet options. 
                        Whether you envision a lavish banquet of fine cuisine or a cozy buffet with your favorite comfort foods, 
                        our culinary team ensures each meal aligns with your tastes and vision for the day.</p>
            <br /> <br />
<div className="buttonV">
<button className="btn10" onClick={()=> navigate('/login')}> Book your service
</button>
<br /> <br />
</div>
    </div>
    
    </div>
    
    
</div>
  )
}

export default CateringDetails;