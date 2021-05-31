import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import model3  from "../../images/modelS.png";
import modelY from "../../images/modelY.png";
import modelX from "../../images/modelX.png";
import modelS from "../../images/model3.png";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardComponent.css";
import { Link } from "react-router-dom";
const CardComponent: React.FC = () => {
  const [data, setData] = useState([]);
  const imgs:any = {model3,modelS, modelY,modelX};

  const getData = async () => {
    const res = await axios.get(
      "https://tesla-app-server.herokuapp.com/models/all"
    );
    console.log(res.data.elements);
    setData(res.data.elements);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
   
      <Container>
        <Row>
          {data.map((item: any, i: number) => (
            <Col xs={5} md={3}>
              <Card style={{ width: "19rem" }}>
                <Link to={`/details/${item.model}`}><Card.Img variant='top' src={imgs[`${item.model}`]} /></Link>
                
                <Card.Body>
                  <Card.Title>
                    <Row className='titleText'>
                      <Col>{item.displayName}</Col>
                      <Col className='miText'>{item.range} mi</Col>
                    </Row>
                  </Card.Title>

                  <Card.Text>
                    <Row className='cardText'>
                      <Col md={2}>199s</Col>

                      {item.topSpeed ? (
                        <Col md={3}>{item.topSpeed}</Col>
                      ) : (
                        <Col md={3}>200</Col>
                      )}

                      {item.peakPower ? (
                        <Col md={3}> {item.peakPower}</Col>
                      ) : (
                        <Col md={3}>1020</Col>
                      )}
                      <Col md={3}>$65766</Col>
                    </Row>

                    <Row className='cardText2'>
                      <Col md={2}>0-60</Col>
                      <Col md={3}>Top Speed</Col>
                      <Col md={3}>Peak Power</Col>
                      <Col md={3}>Starts</Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
   
  );
};
export default CardComponent;
