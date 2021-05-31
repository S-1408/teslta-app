import React from 'react';
import desktopImage from "../../../images/model3.png";
import mobileImage from "../../../images/mobile-car.png";

import {Link} from 'react-router-dom'
import './DetailSectionA.css'
import Header from './../../header/Header';
import { Button } from 'react-bootstrap';
interface Cars{
    displayName:any
}

const DetailSectionA:React.FC<Cars> = ({displayName})=>{
    const imgUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
     return (
        <div className='sectionA-bg' style={{ backgroundImage:  `url(${imgUrl})`}}>
 <Header />
      <div className='textContainer'>
        <div className='detail-text'>
          <p>{displayName}</p>
          <Link to="/orderConfig">
        <button className='secAbutton'>
        
          Order
          </button>
      
        </Link>
        </div>  
      </div>
      
         </div>
     )
}
export default DetailSectionA