import "./color-form.css";

export default function ColorForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    event.target.reset();
    event.target.elements.role.focus();
  }

  return (
    <>
      <form className="color-form" onSubmit={(event) => handleSubmit(event)}>
        <lable htmlFor="roleInput">Role:</lable>
        <input
          id="roleInput"
          type="text"
          name="role"
          placeholder="Primary main"
        ></input>
        <lable htmlFor="hexInput">Hex:</lable>
        <input
          id="hexInput"
          type="color"
          name="hex"
          defaultValue="#1d1d1f"
        ></input>

        <lable htmlFor="contrastInput">Contrast Color:</lable>
        <input
          id="contrastInput"
          type="color"
          name="contrastColor"
          defaultValue="#ffffff"
        ></input>
        <button className="submit-button" type="submit">
          Add Color
        </button>
      </form>
    </>
  );
}
