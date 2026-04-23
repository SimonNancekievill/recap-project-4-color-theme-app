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
  const [check, setCheck] = useState(false);

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
        {check ? (
          <>
            <p className="color-card-highlight">Really Delete?</p>
            <button type="button" onClick={() => setCheck(false)}>
              CANCEL
            </button>
            <button type="button" onClick={() => onDeleteColor(color)}>
              DELETE
            </button>
          </>
        ) : (
          <button type="button" onClick={() => setCheck(true)}>
            DELETE
          </button>
        )}
      </div>
    </li>
  );
}
