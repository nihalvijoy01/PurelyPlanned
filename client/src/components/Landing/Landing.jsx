import React, { useEffect } from "react";
import "./landing.css";
import l1 from "/src/images/land4.jpg";
import l2 from "/src/images/land2.jpg";
import l3 from "/src/images/land3.jpg";
import VenueService from "../services/Venue/VenueService";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);
  const navigate = useNavigate();

  return (
    <div className="landingbody">
      {/* <header>
        <h1 className="headmain">PURELY PLANNED</h1>
        <br />
      </header> */}

      <div className="heroland"></div>
      <br />
      <div className="decorative-line">
        <span className="decorative-text">🙘🙤🙦🙚</span>
      </div>

      <div className="contentheading">
        <h2 className="heading55">
          Full Service Wedding Planning for the <br /> Sophisticated, Timeless
          Couple
        </h2>
      </div>
      <p className="contentpara">
        We are passionate about unleashing only the best weddings, with <br />{" "}
        years of experience and a portfolio of countless works
      </p>

      <div className="decorative-line">
        <span className="decorative-text">🙘🙤🙦🙚</span>
      </div>

      <div className="images">
        <div className="imagesone" data-aos="zoom-in">
          <img src={l1} alt="Couple Kissing" />
        </div>
        <div className="imagestwo" data-aos="zoom-in">
          <img src={l2} alt="Bride in Hallway" />
        </div>
        <div className="imagesthree" data-aos="zoom-in">
          <img src={l3} alt="Bride Adjusting Shoe" />
        </div>
      </div>

      <div className="decorative-line">
        <br />
        <span className="decorative-text">🙘🙤🙦🙚</span>
        <br /> <br />
      </div>

      <div className="divforservice">
        <VenueService />
      </div>
    </div>
  );
}

export default Landing;
