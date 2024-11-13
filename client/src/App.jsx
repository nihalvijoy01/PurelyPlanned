import { useState } from "react";
import reactLogo from "./assets/react.svg";
import LoginPage from "./pages/LoginPage";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import WeddingDashboard from "./pages/WeddingDashboard";
import Landing from "./components/Landing/Landing";
import WeddingProjects from "./pages/WeddingPage";
import ManageGuests from "./pages/ManageGuests";
import ManageChecklist from "./pages/ManageChecklist";
import Navbar from "./components/Navbar";
import ManageBudget from "./pages/ManageBudgets";
import VendorList from "./pages/VendorList";
import WeddingForm from "./pages/WeddingForm";
import ProtectedRoute from "./components/ProtectedRoute";
import VenueService from "./components/services/Venue/VenueService";
import VenueDetails from "./components/services/Details/VenueDetails";
import CateringDetails from "./components/services/Details/CateringDetails";
import PhotographyDetails from "./components/services/Details/PhotographyDetails";
import VenueVendors from "./components/VendorsByCategory";
import MakeupDetails from "./components/services/Details/MakeupDetails";
import VenueV from "./components/VenueV";
import CateringVendors from "./components/CateringVendors";
import EntertainmentVendors from "./components/EntertainmentVendors";
import MakeupVendors from "./components/MakeupVendors";
import TravelVendors from "./components/TravelVendors";
import PhotographyVendors from "./components/PhotographyVendors";
import DecorationVendors from "./components/DecorationVendors";
import Herosec from "./pages/cart/ProductDetail";
import BeforeRegister from "./pages/BeforeRegister";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Landing />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <LoginPage />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <RegisterPage />
              </>
            }
          />
          <Route path="/selection" element={<BeforeRegister />} />
          <Route
            path="/weddings"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <WeddingProjects />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/weddings/:weddingId/dashboard"
            element={
              <ProtectedRoute>
                <WeddingDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/weddings/:weddingId/guests"
            element={
              <ProtectedRoute>
                <ManageGuests />
              </ProtectedRoute>
            }
          />
          <Route
            path="/weddings/:weddingId/checklist"
            element={
              <ProtectedRoute>
                <ManageChecklist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/weddings/:weddingId/budget"
            element={
              <ProtectedRoute>
                <ManageBudget />
              </ProtectedRoute>
            }
          />
          <Route
            path="/weddings/:weddingId/vendors"
            element={
              <ProtectedRoute>
                <VendorList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/weddings/:weddingId/website"
            element={
              <ProtectedRoute>
                <WeddingForm />
              </ProtectedRoute>
            }
          />
          <Route path="/services" element={<VenueService />} />
          <Route path="/venueDetails" element={<VenueDetails />} />
          <Route path="/cateringDetails" element={<CateringDetails />} />
          <Route path="/makeupDetails" element={<MakeupDetails />} />
          <Route path="/photographyDetails" element={<PhotographyDetails />} />

          <Route path="/vendorsByCategory" element={<VenueVendors />} />

          <Route path="/venueV/:weddingId" element={<VenueV />} />
          <Route
            path="/cateringVendors/:weddingId"
            element={<CateringVendors />}
          />
          <Route
            path="/entertainmentVendors/:weddingId"
            element={<EntertainmentVendors />}
          />
          <Route path="/makeupVendors/:weddingId" element={<MakeupVendors />} />
          <Route path="/travelVendors/:weddingId" element={<TravelVendors />} />
          <Route
            path="/photographyVendors/:weddingId"
            element={<PhotographyVendors />}
          />
          <Route
            path="/decorationVendors/:weddingId"
            element={<DecorationVendors />}
          />
          {/* <Route path='/productDetail' element={<ProductDetail />} /> */}

          <Route path="/productDetail/:vendorId" element={<Herosec />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
