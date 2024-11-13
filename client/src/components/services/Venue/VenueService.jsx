import React from 'react'
import './VenueService.css'
import img11 from '/src/images/v6.png';
import img12 from '/src/images/s4.png';
import img13 from '/src/images/s16.jpeg';
import img14 from '/src/images/s7.png';
import img15 from '/src/images/s6.png';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function VenueService() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Adjust duration as needed
    }, []);

    const navigate = useNavigate();
  return (
    <div class="container">

        
        
        <div className="header1">
            
            <h1>OUR SERVICES</h1>
        </div>
        {/* <div class="arch-overlay2"></div> */}
    
        

        <div className="section1" data-aos="fade-right">
        <img src={img11} alt="Venue" className="image1" data-aos="fade-right" />
        <div className="content1" data-aos="fade-left">
                <div class="blankbox1"> </div>
                <div class="textcontent1">
                <h2 class="contentTitle1">Venue Selection</h2> <br />
                <p class="p1">Explore a diverse array of enchanting venues, from <br/> picturesque outdoor settings to elegant indoor spaces,<br/> ensuring  the perfect backdrop for your love story.</p> <br/>
                <a href="/venueDetails" class="read-more">Read More</a>
            </div>
        </div>
        </div>
        <div class="section1 reverse">
            <img src={img12} alt="Catering" class="image2" data-aos="fade-left"/>
            <div class="content2" data-aos="fade-right">
                
                <div class="textcontent2">
                <h2 class="contentTitle2">Catering Selection</h2> <br />
                <p class="p2">Indulge your guests with exquisite cuisine tailored to <br/> your taste. Our culinary experts craft menus that delight <br/> the palate and elevate the overall dining experience.</p> <br/>
                <a href="/cateringDetails" class="read-more">Read More</a>
                
            </div>
            <div class="blankbox2"> <hr/> </div>
        </div>
        </div>

        <div class="section1">
            <img src={img15} alt="Venue" class="image1" data-aos="fade-right"/>
            <div class="content1" data-aos="fade-left">
                <div class="blankbox1">  </div>
                <div class="textcontent1">
                <h2 class="contentTitle1">BRIDAL MAKEUP</h2> <br />
                <p class="p1">Radiate beauty on your special day with the artistry of our <br/> skilled bridal makeup artists. 
                Each brushstroke enhances <br/>  your natural glow, creating a timeless look that <br/> reflects your unique style. 
                </p> <br/>
                <a href="/makeupDetails" class="read-more">Read More</a>
            </div>
        </div>
        </div>


        <div class="section1 reverse">
            <img src={img14} alt="Catering" class="image2" data-aos="fade-left" />
            <div class="content2" data-aos="fade-right">
                
                <div class="textcontent2">
                <h2 class="contentTitle2">PHOTOGRAPHY</h2> <br />
                <p class="p2">Capture the essence of your love with the artistry of our <br/> media photographers and also videographers.
                 Every <br/> moment is immortalized, ensuring memories that last a lifetime.</p> <br/>
                 <a href="/photographyDetails" class="read-more">Read More</a>
                
            </div>
            <div class="blankbox2"> <hr /> </div>
        </div>
        </div>

        <div class="section1">
            <img src={img13} alt="Venue" class="image1" data-aos="fade-right"/>
            <div class="content1" data-aos="fade-left">
                <div class="blankbox1">  </div>
                <div class="textcontent1">
                <h2 class="contentTitle1">VENUE DECORATION</h2> <br />
                <p class="p1">Elevate your venue with our expert decor and  design services. <br/> 
                            From thematic designs  to personalized details, our team <br/> ensures every element 
                            complements your vision.</p> <br/>
                <a href="/login" class="read-more">Read More</a>
            </div>
        </div>
        </div>

        

    </div>
  )
}

export default VenueService;