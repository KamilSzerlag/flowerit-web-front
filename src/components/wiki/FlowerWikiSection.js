import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

const WikiSection = () => {
  const [plants, setPlants] = useState([]);

  let resbody = {};
  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch("http://localhost:4000/wiki/plants");
      resbody = await response.json();
      setPlants(resbody.data);
    };
    fetchPlants();
  }, []);

  let activeItem = false;
  function showPlant(event, plantId) {
    event.preventDefault();
    const fetchPlant = async () => {
      const response = await fetch(`http://localhost:4000/wiki/plants/${plantId}`);
      resbody = await response.json();
      setPlants(resbody.data);
    };
  }

  return (
    <Container>
      <ListGroup defaultActiveKey="#link1">
        {plants.map((plant) => (
          <ListGroup.Item
            key="plant"
            action
            onClick={showPlant(event, plant._id)}
            active={activeItem}
          >
            plant.displayName;
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default WikiSection;
