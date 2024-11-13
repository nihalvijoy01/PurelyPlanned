// // src/components/VenueVendors.js


// src/components/VenueVendors.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import VendorCard from "./VendorCard";
import DashboardSidebar from "./DashboardSidebar";
import { useParams } from "react-router";

const CateringVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const selectedCategory = 'Catering'
  const { weddingId } = useParams();
  useEffect(() => {
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
  }, [selectedCategory, weddingId]);

  // if (loading) return <p>Loading {selectedCategory} vendors...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex bg-[#faf6f2] min-h-screen">
      <DashboardSidebar wedding_id={weddingId} />
      <div className="p-6 sm:ml-64 w-full">
        <h2 className="text-3xl font-bold text-[#7a6a58] mb-6">
          {selectedCategory} Vendors
        </h2>

        {/* Grid layout for vendor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="flex justify-center">
              <VendorCard vendor={vendor} weddingId={weddingId}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CateringVendors;
