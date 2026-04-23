import { useState } from "react";
import "./Color.css";

export default function Color({
  id,
  hex,
  contrastText,
  role,
  onDeleteColor,
  color,
}) {
  const [confirmation, setConfirmation] = useState(false);

  return (
    <li
      key={id}
      id={id}
      className="color-card"
      style={{ backgroundColor: hex, color: contrastText }}
    >
      <h2 className="color-card-headline">{hex}</h2>
      <h3>{role}</h3>
      <p>contrast: {contrastText}</p>
      <div>
        {confirmation ? (
          <>
            <p className="color-card-highlight">Really Delete?</p>
            <button type="button" onClick={() => setConfirmation(false)}>
              Cancel
            </button>
            <button type="button" onClick={() => onDeleteColor(color)}>
              Delete
            </button>
          </>
        ) : (
          <button type="button" onClick={() => setConfirmation(true)}>
            Delete
          </button>
        )}
      </div>
    </li>
  );
}
