import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);
  function handleInputValue(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
      <span>
        <input
          id={id}
          type="text"
          value={inputValue}
          name={id}
          onChange={handleInputValue}
        />
        <input type="color" value={inputValue} onChange={handleInputValue} />
      </span>
    </>
  );
}
