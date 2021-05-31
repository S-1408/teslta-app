import React from "react";
import {Link} from "react-router-dom"
import desktopImage from "../../images/home-car.png";
import mobileImage from "../../images/mobile-car.png";

import "./Home.css";
import Header from "./../../components/header/Header";
const Home: React.FC = () => {
  const imgUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
  return (
    <div className='home-bg' style={{ backgroundImage: `url(${imgUrl})` }}>
      <Header />
      <div className='textContainer'>
        <div className='home-text'>
          <p>Electric Cars, Solar & Clean Energy</p>
          <Link to="/allcar">
        <button className='homebutton'>All Cars</button>
        </Link>
        </div>  
      </div>
      
    </div>
  );
};
export default Home;
