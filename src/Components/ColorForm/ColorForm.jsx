import "./color-form.css";
import ColorInput from "../ColorInput/ColorInput";
import Color from "../Color/Color";

export default function ColorForm({
  onAddColor,
  defaultValue = { role: "some role", hex: "#1d1d1f", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
    console.log(form.elements);

    form.reset();
    form.elements.role.focus();
  }

  return (
    <>
      <form className="color-form" onSubmit={handleSubmit}>
        <lable htmlFor="roleInput">Role:</lable>
        <input
          id="roleInput"
          type="text"
          name="role"
          defaultValue={defaultValue.role}
        ></input>
        <lable htmlFor="hexInput">Hex:</lable>
        <ColorInput id="hex" defaultValue={defaultValue.hex} />
        <lable htmlFor="contrastInput">Contrast Color:</lable>
        <ColorInput
          id="contrastText"
          defaultValue={defaultValue.contrastText}
        />
        <button className="submit-button" type="submit">
          Add Color
        </button>
      </form>
    </>
  );
}
