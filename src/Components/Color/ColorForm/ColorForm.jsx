export default function ColorForm() {
  return (
    <>
      <form>
        <lable htmlFor="roleInput">
          Role:{" "}
          <input
            id="roleInput"
            type="text"
            name="role"
            placeholder="Primary main"
          ></input>
        </lable>
        <lable htmlFor="hexInput">
          Hex:{" "}
          <input
            id="hexInput"
            type="text"
            name="hex"
            placeholder="#1d1d1f"
          ></input>
        </lable>
        <lable htmlFor="contrastInput">
          Contrast Color:{" "}
          <input
            id="contrastInput"
            type="text"
            name="contrastColor"
            placeholder="#ffffff"
          ></input>
        </lable>
        <lable htmlFor="submitButton">
          <button type="submit" id="submitButton">
            Add Colortheme
          </button>
        </lable>
      </form>
    </>
  );
}
