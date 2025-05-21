import Navbar from "../components/NavbarSedap.jsx"
import { Outlet } from "react-router-dom";
import LandingPageSedap from "../pages/LandingPageSedap.jsx";
import Footer from "../components/Footer.jsx"
export default function MainLayoutQuiz() {
  return (
    <div>
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
      <div className="w-full lg:w-1/3">
        
      </div>
      <Footer/>
    </div>
  );
}
