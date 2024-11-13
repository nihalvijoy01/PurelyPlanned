import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";
import cartImg from "/src/images/v7.jpg";
import cartstyle from "./cart.module.css";
import Header from "./Header";
import Sneakers from "./Sneakers";
const Herosec = () => {
  const [items, setItems] = useState(0);
  const [cart, setCart] = useState(0);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const shadowRef = useRef(null);

  const { vendorId } = useParams();
  const [vendor, setVendor] = useState("");

  const shadowFu = function () {
    return shadowRef.current;
  };

  //get wedding id
  const { state } = useLocation();
  const weddingId = state ? state.weddingId : null; // fallback if weddingId is not provided

  useEffect(() => {
    // Fetch vendor details
    const fetchVendor = async () => {
      try {
        console.log("vendor id : ", vendorId);
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
          `http://localhost:8000/api/vendors/${vendorId}/`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setVendor(response.data);
      } catch (error) {
        console.error("Failed to fetch vendor details:", error);
      }
    };

    // Call fetchVendor only if vendorId changes
    fetchVendor();
  }, [vendorId]);

  useEffect(() => {
    // Manage display logic based on cart value
    if (cart === 0) {
      myRef1.current.style.display = "none";
      myRef2.current.style.display = "none";
      myRef3.current.style.display = "block";
    } else {
      myRef1.current.style.display = "flex";
      myRef2.current.style.display = "block";
      myRef3.current.style.display = "none";
    }
  }, [cart]);

  const vendorImages = [
    vendor.image,
    vendor.image1,
    vendor.image2,
    vendor.image3,
  ];

  // Handle booking logic
  const handleBooking = async () => {
    if (weddingId) {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.post(
          "http://localhost:8000/api/weddingvendor/", // Ensure this endpoint matches your backend endpoint
          {
            vendor: vendorId, // Ensure vendorId is passed correctly
            wedding: weddingId, // Pass weddingId from state
            date: new Date().toISOString().split("T")[0], // Get today's date in the required format (YYYY-MM-DD)
            payment_status: "pending", // Set default payment status
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Booking saved:", response.data);
        alert("Booking Saved !");
      } catch (error) {
        console.error("Error while booking:", error);
        // Log the error response for debugging
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      }
    } else {
      console.log("Wedding ID is required for booking.");
    }
  };

  return (
    <div className={cartstyle.pdcontainer}>
      <div className={cartstyle["hero-sec content-div"]}>
        <Header cartItems={[cart, shadowFu]} />
        <div ref={shadowRef} className={cartstyle.shadow}></div>
        <div className={cartstyle["cart-box"]}>
          <span
            className={`${cartstyle["cart-para"]} ${cartstyle["cart-heading"]}`}
          >
            Cart
            <hr className={cartstyle["cart-hr"]} />
          </span>

          <p
            ref={myRef3}
            className={`${cartstyle["cart-para"]} ${cartstyle["empty-para"]}`}
          >
            Your cart is empty.
          </p>

          <div ref={myRef1} className={cartstyle["cart-item-div"]}>
            <div className={cartstyle["cart-item-col1"]}>
              <img src={cartImg} className={cartstyle["cart-item-img"]} />
            </div>
            <div className={cartstyle["cart-item-col2"]}>
              <p className={cartstyle["cart-para"]}>
                Fall Limited Edition Sneakers $125.00 x {cart}{" "}
                <span className={cartstyle["item-amount"]}>
                  ${125 * cart}.00
                </span>
              </p>
            </div>
            <div className={cartstyle["cart-item-col3"]}>
              <svg
                className={cartstyle["cart-del"]}
                onClick={() => {
                  setCart(cart - 1);
                }}
                width="14"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                  />
                </defs>
                <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
              </svg>
            </div>
          </div>

          <div ref={myRef2} className={cartstyle["checkout-div"]}>
            <button className={cartstyle["checkout-btn"]}>checkout</button>
          </div>
        </div>

        <div className={cartstyle["hero-row"]}>
          <div className={cartstyle["hero-col hero-col1"]}>
            <Sneakers images={vendorImages} />
          </div>
          <div className={cartstyle["hero-col hero-col2"]}>
            <div className={cartstyle["col2-wrapper"]}>
              <h4 className={cartstyle["hero-subHeading"]}>
                {vendor.service_type}
              </h4>
              <h1 className={cartstyle["main-heading"]}>{vendor.name}</h1>
              <p className={cartstyle["hero-para"]}>{vendor.location}</p>
              <span className={cartstyle["dollar"]}>${vendor.cost}</span>

              <button
                className={cartstyle.btn11}
                onClick={handleBooking}
                // onClick={() => {

                //   setCart(items);
                //     setItems(0);
                // }}
              >
                <span className={cartstyle["btn-para"]}>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosec;
