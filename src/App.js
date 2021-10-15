import "./App.css";
import React from "react";
import SortAlgo from "./Components/Sortalgo";
import Popup from "./Components/Popup";
import {
  Toolbar,
  Typography,
  Slider,
  Box,
  Button,
  Container,
} from "@mui/material";
const Algos = [
  { id: "1", type: "Mergesort" },
  { id: "2", type: "SelectionSort" },
  // { id: "3", type: "Heapsort" },
  // { id: "4", type: "Quicksort" },
];
function App() {
  const [taille, setTaille] = React.useState(100);
  const [Arrow, setArrow] = React.useState(50);
  const [algo, setAlgo] = React.useState("Mergesort");

  const ChangeSize = (event, newv) => {
    setTaille(newv);
  };
  const ChangeArrow = (event, NumberofArrow) => {
    setArrow(NumberofArrow);
  };
  const handleAlgo = (algo)=>{
    setAlgo(algo)
  }

  return (
    <div className="App">
      <div className="top" style={{ backgroundColor: "#006b65" }}>
        <div className="Topbar">
          {/* LOGO */}
          <div className="Logo">
            <Toolbar>
              <Typography
                style={{ color: "#fff" }}
                variant="h6"
                color="inherit"
                noWrap
              >
                Visualisation d'algorithmes de tri
              </Typography>
            </Toolbar>
          </div>

          {/* OPTIONS */}
          <div className="options">
            <div className="middle Speed">
              <label
                style={{ color: "#fff" }}
                className="Lable"
                for="SpeedSlider"
              >
                Taille {" "}
              </label>
              <Box width={100}>
                <Slider
                  id="SpeedSlider"
                  size="small"
                  value={taille}
                  onChange={ChangeSize}
                  defaultValue={20}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  style={{ color: "#fff" }}
                />
              </Box>
            </div>
            <div className=" middle Bar-width">
              <label style={{ color: "#fff" }} className="Lable" for="BarWidth">
                Vitesse d'affichage{" "}
              </label>
              <Box width={100}>
                <Slider
                  id="BarWidth"
                  label="bar"
                  size="small"
                  value={Arrow}
                  onChange={ChangeArrow}
                  defaultValue={20}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  style={{ color: "#fff" }}
                />
              </Box>
            </div>
          </div>
          {/* SORTING ALGORITHMS */}
          <div className="algos">
            <div className="listOfAlgo" style={{ textAlign: "center" }}>
              <Typography
                style={{ color: "#f68a2a" }}
                variant="h6"                
              >
                Algorithmes de tri
              </Typography>
            </div>
            {Algos.map((list) => (
              <Button
                onClick={()=>handleAlgo(list.type)}
                key={list.id}
                size="small"
                style={{ color: "#fff" }}
                aria-label="add"
              >
                {list.type} 
              </Button>
            ))}
            
          </div>
        </div>
      </div>
      <main>
        <Container>

          <div style={{ padding: "2em 2em 2em" }}>
            <SortAlgo taille={taille / 6} time={Arrow * 2} algo={algo} />
          </div>
        </Container>
      </main>
      <Popup />
    </div>
  );
}

export default App;
