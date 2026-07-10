import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Hero from "./Hero";
import Awards from "./Awards"; // fixed
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Navbar from "../Navbar";

function HomePage() {


  

  return (
    <>
      <Navbar />


      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />

     
      <Footer />
      <ToastContainer />
    </>
  );
}

export default HomePage;