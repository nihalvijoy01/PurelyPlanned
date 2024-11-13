import { useState } from "react";
import cartstyle from './cart.module.css';
import LightBox from "./LightBox";

const Sneakers = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0); // Track the currently displayed image
  const currentImage = images[imageIndex];

  return (
    <div className={cartstyle["sneakers-div"]}>
      <div className={cartstyle["sneakers-col"] + " " + cartstyle["sneakers-col1"]}>
        <svg
          onClick={() => {
            setImageIndex((imageIndex - 1 + images.length) % images.length);
          }}
          className={cartstyle["mobile-prev"]}
          width="12"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        <img
          className={cartstyle["big-sneaker"]}
          alt="sneaker"
          onClick={() => {
            document.querySelector(`.${cartstyle["lightBox-div"]}`).classList.add(cartstyle["lightBox-toggle"]);
            document.querySelector(`.${cartstyle["shadow"]}`).classList.add(cartstyle["shadow-toggle"]);
          }}
          src={currentImage}
        />
        <svg
          onClick={() => {
            setImageIndex((imageIndex + 1) % images.length);
          }}
          className={cartstyle["mobile-next"]}
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        <LightBox imageTrack={imageIndex + 1} />
      </div>
      <div className={cartstyle["sneakers-col"] + " " + cartstyle["sneakers-col2"]}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${cartstyle["small-sneaker-div"]} ${imageIndex === index ? cartstyle["active-sneaker"] : ""}`}
          >
            <img
              alt={`Thumbnail ${index + 1}`}
              className={cartstyle["small-sneaker"]}
              onClick={() => setImageIndex(index)}
              src={img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sneakers;
