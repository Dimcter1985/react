import { useState } from "react";

const Selects = () => {
  const cities = ["Moscow", "New-York", "Tokio"];

  const [value, setValue] = useState("");

  return (
    <div>
      <h3>Selects</h3>
      <select value={value} onChange={(ev) => setValue(ev.target.value)}>
        {cities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default Selects;
