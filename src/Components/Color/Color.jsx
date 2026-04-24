import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({
  id,
  hex,
  contrastText,
  role,
  onDeleteColor,
  onEditColor,
  color,
}) {
  const [confirmation, setConfirmation] = useState(false);
  const [editing, setEditing] = useState(false);

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
          <>
            <button type="button" onClick={() => setConfirmation(true)}>
              Delete
            </button>
            {editing ? (
              <>
                <ColorForm
                  defaultValue={{ role, hex, contrastText }}
                  onAddColor={(updatedColor) => {
                    onEditColor(id, updatedColor);
                    setEditing(false);
                  }}
                  submitButton="Apply Changes"
                />
                <button type="button" onClick={() => setEditing(false)}>
                  discard changes
                </button>
              </>
            ) : (
              <button type="button" onClick={() => setEditing(true)}>
                Edit
              </button>
            )}
          </>
        )}
      </div>
    </li>
  );
}
