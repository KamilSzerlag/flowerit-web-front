import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./FlowerJumbotron.css"

const FlowerJumbotron = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Hello in Flowerit!</h1>
        <p>We will help you take care of your flowers!</p>
      </Container>
    </Jumbotron>
  );
};

export default FlowerJumbotron;
