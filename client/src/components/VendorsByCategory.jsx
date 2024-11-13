// // src/components/VenueVendors.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import VendorCard from "./VendorCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// // import { Autoplay } from "swiper";
// import "swiper/css/autoplay";
// import DashboardSidebar from "./DashboardSidebar";
// import { useParams } from "react-router-dom";


// const VenueVendors = () => {
//   const [vendors, setVendors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const {weddingId} = useParams();

//   useEffect(() => {
//     const fetchVendors = async () => {
//       const token = localStorage.getItem("access_token");
//       try {
//         const response = await axios.get(
//           `http://localhost:8000/api/weddings/${weddingId}/vendors/`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
        
//         // Filter vendors by service_type
//         const venueVendors = response.data.filter(
//           (vendor) => vendor.service_type === "Venue"
//         );

//         setVendors(venueVendors);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch venue vendors", err);
//         setError("Failed to load venue vendors");
//         setLoading(false);
//       }
//     };

//     fetchVendors();
//   }, [weddingId]); // Add weddingId to dependency array to re-fetch when it changes

//   if (loading) return <p>Loading venue vendors...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="flex bg-[#faf6f2] min-h-screen">
//       <DashboardSidebar wedding_id={weddingId} />
//       <div className="p-6 sm:ml-64 w-full">
//         <h2 className="text-3xl font-bold text-[#7a6a58] mb-6">Venue Vendors</h2>
        
//         <Swiper
//         //   modules={[Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           loop={true}
//           centeredSlides={true}
//           autoplay={{ delay: 3000 }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="w-full"
//         >
//           {vendors.map((vendor) => (
//             <SwiperSlide key={vendor.id} className="flex justify-center">
//               <VendorCard vendor={vendor} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default VenueVendors;

// src/components/VenueVendors.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import VendorCard from "./VendorCard";
// import DashboardSidebar from "./DashboardSidebar";
// import { useParams } from "react-router-dom";

// const VenueVendors = () => {
//   const [vendors, setVendors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { weddingId } = useParams();

//   useEffect(() => {
//     const fetchVendors = async () => {
//       const token = localStorage.getItem("access_token");
//       try {
//         const response = await axios.get(
//           `http://localhost:8000/api/weddings/${weddingId}/vendors/`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         // Filter vendors by service_type
//         const venueVendors = response.data.filter(
//           (vendor) => vendor.service_type === "Venue"
//         );

//         setVendors(venueVendors);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch venue vendors", err);
//         setError("Failed to load venue vendors");
//         setLoading(false);
//       }
//     };

//     fetchVendors();
//   }, [weddingId]);

//   if (loading) return <p>Loading venue vendors...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="flex bg-[#faf6f2] min-h-screen">
//       <DashboardSidebar wedding_id={weddingId} />
//       <div className="p-6 sm:ml-64 w-full">
//         <h2 className="text-3xl font-bold text-[#7a6a58] mb-6">Venue Vendors</h2>
        
//         {/* Grid layout for vendor cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {vendors.map((vendor) => (
//             <div key={vendor.id} className="flex justify-center">
//               <VendorCard vendor={vendor} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VenueVendors;

// src/components/VenueVendors.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import VendorCard from "./VendorCard";
// import DashboardSidebar from "./DashboardSidebar";

// const VenueVendors = ({ weddingId }) => {
//   const [vendors, setVendors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const selectedCategory = 'Venue'
//   useEffect(() => {
//     const fetchVendors = async () => {
//       const token = localStorage.getItem("access_token");
//       try {
//         const response = await axios.get(
//           `http://localhost:8000/api/weddings/${weddingId}/vendors/`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         // Filter vendors based on selected category
//         const filteredVendors = response.data.filter(
//           (vendor) => vendor.service_type === selectedCategory
//         );

//         setVendors(filteredVendors);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch vendors", err);
//         setError("Failed to load vendors");
//         setLoading(false);
//       }
//     };

//     fetchVendors();
//   }, [selectedCategory, weddingId]);

//   if (loading) return <p>Loading {selectedCategory} vendors...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="flex bg-[#faf6f2] min-h-screen">
//       <DashboardSidebar wedding_id={weddingId} />
//       <div className="p-6 sm:ml-64 w-full">
//         <h2 className="text-3xl font-bold text-[#7a6a58] mb-6">
//           {selectedCategory} Vendors
//         </h2>

//         {/* Grid layout for vendor cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {vendors.map((vendor) => (
//             <div key={vendor.id} className="flex justify-center">
//               <VendorCard vendor={vendor} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VenueVendors;

import React, { useEffect, useState } from "react";
import axios from "axios";
import VendorCard from "./VendorCard";
import DashboardSidebar from "./DashboardSidebar";
import { useNavigate } from "react-router-dom";

const VenueVendors = ({ selectedCategory, weddingId }) => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Map category to corresponding path
  const categoryPaths = {
    Venue: `/venueV/${weddingId}`,
  Catering: `/cateringVendors/${weddingId}`,
    Entertainment: `/entertainmentVendors/${weddingId}`,
    MakeUp: `/makeupVendors/${weddingId}`,
    Travel: `/travelVendors/${weddingId}`,
    Photography: `/photographyVendors/${weddingId}`,
    Decoration: `/decorationVendors/${weddingId}`,
  };

  useEffect(() => {
    // Navigate based on selected category
    if (categoryPaths[selectedCategory]) {
      navigate(categoryPaths[selectedCategory]);
    }
    
    const fetchVendors = async () => {
      const token = localStorage.getItem("access_token");
      try {
        const response = await axios.get(
          `http://localhost:8000/api/weddings/${weddingId}/vendors/`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // Filter vendors based on selected category
        const filteredVendors = response.data.filter(
          (vendor) => vendor.service_type === selectedCategory
        );

        setVendors(filteredVendors);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch vendors", err);
        setError("Failed to load vendors");
        setLoading(false);
      }
    };

    fetchVendors();
  }, [selectedCategory, weddingId, navigate]);

  if (loading) return <p>Loading {selectedCategory} vendors...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
  {/* <div className="card bg-base-100 image-full w-3/4 h-52 shadow-xl">
    <figure className="w-full h-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        className="object-cover w-full h-full"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div> */}
</div>

  );
};

export default VenueVendors;

