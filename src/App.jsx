import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";
function App() {
  const [colors, setColors] = useState(initialColors);
  function handleDeleteColor(colorToDelete) {
    setColors(colors.filter((color) => color !== colorToDelete));
  }
  function handleAddColor(newColor) {
    setColors([
      {
        id: uid(),
        role: newColor.role,
        hex: newColor.hex,
        contrastText: newColor.contrastText,
        ...Color,
      },
      ...colors,
    ]);
  }
  function handleEditColor(id, updatedColor) {
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, ...updatedColor } : color,
      ),
    );
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.length > 0 ? (
        <ul>
          {colors.map((color) => (
            <Color
              key={color.id}
              id={color.id}
              hex={color.hex}
              role={color.role}
              contrastText={color.contrastText}
              onDeleteColor={handleDeleteColor}
              onEditColor={handleEditColor}
              color={color}
            />
          ))}
        </ul>
      ) : (
        <p>No Colors… start by adding one!</p>
      )}
    </>
  );
}

export default App;
