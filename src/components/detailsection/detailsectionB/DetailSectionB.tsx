import React from "react";
import blackCar from "../../../images/black-car.png";
import "./DetailSectionB.css";
import {  Row, Col, Image, Button } from "react-bootstrap";
interface Variant {
  displayName: string;

  range: number;
  peakPower: string;
  wheelsA: number;
  wheelsB: number;
  cargo: string;
  weight: number;
  speed: string;
  time: number;
  topSpeed: number;
  dragCoefficient: string;
  powertrain: string;
  superchargingMax: string;
  variantName: string;
}

const DetailSectionB: React.FC<Variant> = ({
  range,
  variantName,
  displayName,
  time,
  speed,
  peakPower,
  topSpeed,
  weight,
  cargo,
  dragCoefficient,
  powertrain,
  wheelsA,
  wheelsB,
  superchargingMax,
}) => {
  return (
    <div>
      <Row noGutters style={{ overflowX: "hidden" }}>
        <Col lg={8}>
          <Image src={blackCar} fluid />
        </Col>

        <Col lg={4} md={6} style={{ backgroundColor: "black" }}>
          <Row className='textA'>{displayName} Space</Row>
          <br />
          <Row>
            <Col lg={4}>
              {" "}
              <button className='secBbutton1'>{variantName}</button>
            </Col>
            <Col>
              <button className='secBbutton'>Long Range</button>
            </Col>
          </Row>

          <Row className='textB'>
            <Col lg={4}>
              <p>Range</p>
              <p>{range}mi</p>
              <p>Peak Power</p>
              <p>{peakPower}</p>
              <p>Top Speed</p>
              <p>{topSpeed} mph</p>
              <p>Weight</p>
              <p>{weight} lbs</p>
              <p>Cargo Capacity</p>
              <p>{cargo}</p>
            </Col>
            <Col lg={4}>
              <p>Power Train</p>
              <p>{powertrain}</p>
              <p>Acceleration</p>
              <p>
                {speed}-{time}mph
              </p>
              <p>Drag Coefficient</p>
              <p>{dragCoefficient}</p>
              <p>Wheels</p>
              <p>
                {wheelsA}" or {wheelsB}"
              </p>
              <p>Charging</p>
              <p>{superchargingMax}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default DetailSectionB;
