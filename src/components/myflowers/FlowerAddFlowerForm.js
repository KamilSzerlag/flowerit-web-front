import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FlowerAddButton from "./FlowerAddButton";
import "./FlowerAddFlowerForm.css";

const FlowerAddFlowerForm = ({ species }) => {
  const [plantName, setPlantName] = useState("");
  const [plantDate, setPlantDate] = useState("");
  const [plantSpecies, setPlantSpecies] = useState(species[0].plantName);
  let plant = {};

  useEffect(() => {
    plant = {
      name: plantName,
      dateOfPlant: plantDate,
      species: plantSpecies,
    };
  }, [plantName, plantDate, plantSpecies]);

  // [] = useEffect();

  async function addPlant() {
    console.log(plant);

    const requestOptions = {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(plant),
    };
    await fetch("http://localhost:4000/plants", requestOptions);
  }

  return (
    <div className="add-flower-form">
      <Form
        onSubmit={(e) => {
          //On submit we are sending request to the API!
          e.preventDefault();
          console.log(plant);
          addPlant();
        }}
      >
        <Form.Group as={Col} controlId="formGridPlantName">
          <Form.Label>Plant name</Form.Label>
          <Form.Control
            type="Name"
            placeholder="Plant Name"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPlantName">
          <Form.Label>Date of planting</Form.Label>
          <Form.Control
            type="date"
            value={plantDate}
            onChange={(e) => setPlantDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPlantSpecies">
          <Form.Label>Plant species</Form.Label>
          <Form.Control
            as="select"
            defaultValue={plantSpecies}
            value={plantSpecies}
            onChange={(e) => setPlantSpecies(e.target.value)}
          >
            {species.map((plant) => {
              return <option key={plant}>{plant.plantName}</option>;
            })}
          </Form.Control>
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check checked type="checkbox" label="Check me out" />
        </Form.Group>

        <FlowerAddButton />
      </Form>
    </div>
  );
};

export default FlowerAddFlowerForm;
