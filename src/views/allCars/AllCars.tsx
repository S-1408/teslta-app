import React from "react";
import Header from "../../components/header/Header";

import CardComponent from "../../components/card/CardComponent";
const AllCars: React.FC = () => {
  return (
    <div>
      <Header />
      <div
        style={{ textAlign: "center", marginTop: "40px", fontWeight: "bold" }}>
        <p>ALL MODELS</p>
        <br />
        <br />

        <CardComponent 
       
         />
      </div>
    </div>
  );
};
export default AllCars;
