import { useState } from "react";

const Radiobuttons = () => {
  const [value, setValue] = useState("JS");

  const changeValue = (ev) => setValue(ev.target.value);

  return (
    <div>
      <h3>Radiobuttons</h3>
      <input
        type="radio"
        value="JS"
        onChange={changeValue}
        checked={value === "JS" ? true : false}
      />
      <input
        type="radio"
        value="PHP"
        onChange={changeValue}
        checked={value === "PHP" ? true : false}
      />
      <input
        type="radio"
        value="C#"
        onChange={changeValue}
        checked={value === "C#" ? true : false}
      />
      <p>{value === "JS" ? `${value} - it's good choice!` : value}</p>
    </div>
  );
};

export default Radiobuttons;
