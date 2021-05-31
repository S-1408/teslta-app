import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import desktopImage from "../../images/home-car.png";
import mobileImage from "../../images/mobile-car.png";

import DetailSectionA from "../../components/detailsection/detailsectionA/DetailSectionA";
import DetailSectionB from "./../../components/detailsection/detailsectionB/DetailSectionB";
const CarDetails: React.FC = () => {
  let { id } = useParams<{ id: string }>();

  const [cars, setCars] = useState({
    displayName: "",
    variants: [
      {
        range: 0,
        peakPower: "",
        wheels: [0,0],
        cargo: "",
        weight: 0,
        acceleration: { speed: "", time: 0 },
        topSpeed: 0,
        dragCoefficient: "",
        powertrain: "",
        superchargingMax: "",
        variantName:""
      },
    ],
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      `https://tesla-app-server.herokuapp.com/models/${id}`
    );
    console.log(res);
    setCars(res.data);
  };

  const imgUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <div className='cardetail'>
      <section className='carsection-one'></section>
      <section className='carsection-two'>
        <DetailSectionA displayName={cars.displayName} />
      </section>
      <section className='carsection-two'>
        <DetailSectionB
          range={cars.variants[0].range}
          peakPower={cars.variants[0].peakPower}
          cargo={cars.variants[0].cargo}
          weight={cars.variants[0].weight}
          speed={cars.variants[0].acceleration.speed}
          time={cars.variants[0].acceleration.time}
          topSpeed={cars.variants[0].topSpeed}
            dragCoefficient={cars.variants[0].dragCoefficient}
            powertrain={cars.variants[0].powertrain}
            superchargingMax={cars.variants[0].superchargingMax}
            wheelsA={cars.variants[0].wheels[0]}

            wheelsB={cars.variants[0].wheels[1]}
            variantName={cars.variants[0].variantName}
            displayName={cars.displayName}

          
        />
      </section>
    </div>
  );
};

export default CarDetails;
