import React, { useEffect, useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import VenueVendors from "../components/VendorsByCategory";
import { useParams } from "react-router";
import imgvenue from "/src/images/15.jpg";
import imgfood from "/src/images/food1.jpg";
import imgmakeup from "/src/images/s6.png";
import imgent from "/src/images/s3.png";
import imgbus from "/src/images/bus1.jpg";
import imgcam from "/src/images/cam1.jpg";
import imgdec from "/src/images/dec1.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const VendorList = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const { weddingId } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (optional)
      easing: "ease-in-out", // Set easing function (optional)
    });
  }, []);

  // Sample background images for each category
  const categoryImages = {
    Venue: imgvenue,
    Catering: imgfood,
    Entertainment: imgent,
    MakeUp: imgmakeup,
    Travel: imgbus,
    Photography: imgcam,
    Decoration: imgdec,
  };

  return (
    <div>
      <DashboardSidebar wedding_id={weddingId} />
      <div className="p-4 sm:ml-64 bg-[#faf6f2]">
        <h2 className="text-6xl font-bold mb-6">Vendor Categories</h2> <br />
        {/* Category Cards */}
        <div className="space-y-12">
          {[
            "Venue",
            "Catering",
            "Entertainment",
            "MakeUp",
            "Travel",
            "Photography",
            "Decoration",
          ].map((category) => (
            <div
              key={category}
              className="card bg-base-100 image-full shadow-xl w-3/4 h-44"
              data-aos="fade-up"
              onClick={() => setSelectedCategory(category)}
            >
              <figure className="w-full h-full">
                <img
                  src={categoryImages[category]}
                  alt={category}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body flex flex-col justify-end">
                <h2 className="card-title text-white text-4xl">{category}</h2>
                <div className="card-actions justify-end">
                  <button
                    className="btn10"
                    onClick={() => setSelectedCategory(category)}
                  >
                    Select {category}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Render Vendor Component with selectedCategory */}
        {selectedCategory && (
          <VenueVendors
            selectedCategory={selectedCategory}
            weddingId={weddingId}
          />
        )}
      </div>
    </div>
  );
};

export default VendorList;
