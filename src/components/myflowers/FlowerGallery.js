import React, { useState, useEffect } from "react";
import FlowerCard from "./FlowerCard";
import "./FlowerGallery.css";

const FlowerGallery = () => {
  const [flowers, setFlowers] = useState([]);

  let resbody = {};
  useEffect(() => {
    const fetchFlowers = async () => {
      const response = await fetch("http://localhost:4000/plants");
      resbody = await response.json();
      setFlowers(resbody.data);
    };
    fetchFlowers();
  }, []);

  if (flowers.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flowers-gallery">
      {flowers.map((flower) => (
        <FlowerCard key="flower" flower={flower} />
      ))}
    </div>
  );
};

export default FlowerGallery;
