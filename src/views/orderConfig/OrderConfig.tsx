import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import whiteCar from "../../images/white-car.png";
import orderDetail from '../../mocks/orderConfig.json';

import "./OrderConfig.css";
const OrderConfig: React.FC = () => {

    
  return (

    
    <div className='order'>

        
      <Row noGutters>
        <Col lg={9} style={{ marginTop: "70px" }}>
          <Image src={whiteCar} fluid />
        </Col>
        <Col lg={3}>
          <Row className='rowA'>Model S</Row>
          <Row style={{ marginTop: "10px" }}>
            <Col className='rowB'>
              412 mi
              <p className='rowC'>Est Range</p>
            </Col>
            <Col className='rowB'>
              412 mi
              <p className='rowC'>Est Range</p>
            </Col>
            <Col className='rowB'>
              412 mi
              <p className='rowC'>Est Range</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className='secAbutton'>
                <span>Long Range</span>
                <span>$98,768</span>
              </button>
              <button className='secAbutton'>
                <span> Plade </span>
                <span> $79,123 </span>
              </button>
              <button className='secAbutton'>
                <span> Plade+ </span>
                <span> $79,123</span>
              </button>
            </Col>
          </Row>
          <Row className='rowD '>Paint</Row>
          <br />
          <Row>
            <Col>
              <div className='circleImg'>
                <img src={whiteCar} alt='' />
                <img src={whiteCar} alt='' />
                <img src={whiteCar} alt='' />
              </div>
            </Col>
          </Row>
          <Row className='rowG'>
            <span>Red multi-coat</span>
            <span>$2500</span>
          </Row>

          <Row className='rowE'>Wheels</Row>
          <Row>
            <Col>
              <div className='circleImg'>
                <img src={whiteCar} alt='' />
                <img src={whiteCar} alt='' />
                
              </div>
            </Col>
          </Row>
          <Row className='rowG'>
            <span>19" Tempest</span>
            <span>Include</span>
          </Row>
          <Row className='rowD '>Interiors</Row>
          <br />
          <Row>
            <Col>
              <div className='circleImg'>
                <img src={whiteCar} alt='' />
                <img src={whiteCar} alt='' />
                <img src={whiteCar} alt='' />
              </div>
            </Col>
          </Row>
          <Row className='rowG'>
            <span>All Black decore</span>
            <span>Include</span>
          </Row>
          <Row className='rowD'>
              <span>Full Self-Driving Capabilities</span>
              </Row>
         <Row>
         <p>Navigate on Autopiliot</p>
         <br/>
     <p>$98,768</p>
         </Row>
        </Col>
      </Row>
    </div>
  );
};
export default OrderConfig;
