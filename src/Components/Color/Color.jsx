import "./Color.css";

export default function Color({ id, hex, contrastText, role }) {
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
    </li>
  );
}
