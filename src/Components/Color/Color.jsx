import "./Color.css";

export default function Color({ id, hex, contrastText, role }) {
  return (
    <article
      id={id}
      className="color-card"
      style={{ backgroundColor: hex, color: contrastText }}
    >
      <h3 className="color-card-headline">{hex}</h3>
      <h4>{role}</h4>
      <p>contrast: {contrastText}</p>
    </article>
  );
}
