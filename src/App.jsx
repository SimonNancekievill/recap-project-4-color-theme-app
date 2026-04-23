import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";

function App() {
  // const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    console.log(newColor);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      <ul>
        {initialColors.map((color) => (
          <Color
            key={color.id}
            id={color.id}
            hex={color.hex}
            role={color.role}
            contrastText={color.contrastText}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
