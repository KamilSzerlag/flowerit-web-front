import React from "react";
import { FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const FlowerAddButton = () => {
  return (
    <Button variant="primary" type="submit" className="add-flower-button">
      Add flower <FaPlus />
    </Button>
  );
};

export default FlowerAddButton;
