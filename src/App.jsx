import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm />
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
