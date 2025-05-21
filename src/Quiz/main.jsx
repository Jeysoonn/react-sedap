import { createRoot } from "react-dom/client"
import Navbar from "./NavbarSedap.jsx"
import './tailwind.css';
import "./assets/tailwind.css"
import React from "react";
import LandingPage from "./LandingPage.jsx"

createRoot ( document.getElementById("root"))
    .render(
         <LandingPage/>
          
    )
