import React from "react";
import "./FlowerCard.css";

const FlowerCard = ({ flower }) => {
  const hero = `http://${flower.image}${Math.floor(Math.random() * 10) + 1}.svg`;

  return (
    <div key={flower} className="flower-card">
      <img src={hero} alt="Flower" />
      <div className="flower-container">
        <h4>Flower name: {`${flower.name}`}</h4>
        <h4>species: {`${flower.species}`}</h4>
        <h5>humidity: {`${flower.soilMoisure}%`}</h5>
        <h5>solar insolation: {`${flower.insolation} kw/m2`}</h5>
      </div>
    </div>
  );
};

export default FlowerCard;
