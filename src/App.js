import React from "react";
import "./App.css";
import FlowerJumbotron from "./components/myflowers/FlowerJumbotron";
import FlowerNavbar from "./components/myflowers/FlowerNavbar";
import FlowerGallery from "./components/myflowers/FlowerGallery";
import FlowerAddFlowerForm from "./components/myflowers/FlowerAddFlowerForm";

function App() {
  const mockPlantsSpecies = [
    {
      plantName: "Bird of Paradise (Caesalpinia)",
      needs: "Bright sunlight and high humidity.",
    },
    {
      plantName: "Dragon Tree (Dracaena marginata)",
      needs:
        'Medium to bright, indirect sun ("it will drop leaves if it doesn’t get enough sunlight," she cautions).',
    },
    {
      plantName: "Norfolk Island Pine (Araucaria heterophylla)",
      needs: "Full sun and acidic soil.",
    },
    {
      plantName: "Fishtail Palm (Caryota)",
      needs: "Abundant bright light and lots of water.",
    },
    {
      plantName: "European Olive (Olea europea)",
      needs: "Good drainage and ample direct sun.",
    },
    {
      plantName: "Triangle Ficus (Ficus triangularis)",
      needs: "Filtered sunlight and little else.",
    },
    {
      plantName: "Corn Plant (Dracaena fragrans)",
      needs: "Filtered sunlight and little else.",
    },
    {
      plantName: "Parlor Palm (Chamaedora elegans)",
      needs: "Low light (hooray!) and plenty of moisture.",
    },
    {
      plantName: "Umbrella Tree (Schefflera amata)",
      needs: "Medium light and standard watering.",
    },
    {
      plantName: "Yucca (Yucca elephantipes)",
      needs:
        "Partial-sunlight and not too much water (they're drought-tolerant!).",
    },
    {
      plantName: "Fiddle Leaf Fig (Ficus lyrata)",
      needs:
        'Bright, indirect sun and "a very consistent environment" (so don\'t move it around or those leaves will drop!).',
    },
    {
      plantName: "African Candelabra (Euphorbia ammak)",
      needs: "Full- to part-sun and good drainage.",
    },
    {
      plantName: "Tree Fern",
      needs: "Bright sunlight and high humidity.",
    },
    {
      plantName: "Rubber Tree (Ficus elastica)",
      needs:
        "Bright, indirect light and some coddling (wipe the leaves clean when they get dusty!).",
    },
    {
      plantName: "Rhapis Palm (Rhapis excelsa)",
      needs: "Indirect sunlight, as by an east-facing window.",
    },
    {
      plantName: "Natal Mahogany (Trichilia emetica)",
      needs:
        " Medium light and water at least once a week. Most of the indoor trees on this list will survive if you skip a week of watering, but not the Natal mahogany. It will not recover if the soil dries out.",
    },
    {
      plantName: "Split Leaf (Monstera deliciosa)",
      needs:
        "Bright light, and 11 inches on either side of the plant so the glossy leaves have room to grow outward. Water weekly.",
    },
  ];

  

  return (
    <div className="App">
      <FlowerJumbotron />
      <FlowerNavbar />
      <FlowerAddFlowerForm species={mockPlantsSpecies} />
      <div className="flower-gallery-container">
        <h2 className="flowers-gallery-title">Your flowers</h2>
        <FlowerGallery />
      </div>
    </div>
  );
}

export default App;
