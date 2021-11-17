import { useState } from "react";

const Tusk2 = () => {
  const [value, setValue] = useState({
    prop1: "text1",
    prop2: "text2",
    prop3: "text3",
  });

  return (
    <div>
      <h3>Tusk2</h3>
      <button onClick={() => setValue({...value, prop1: 'text1 !!!!!'})}>1</button>
      <button onClick={() => setValue({...value, prop2: 'text2 !!!!!'})}>2</button>
      <button onClick={() => setValue({...value, prop3: 'text3 !!!!!'})}>3</button>
      <p>{value.prop1}</p>
      <p>{value.prop2}</p>
      <p>{value.prop3}</p>
    </div>
  );
};

export default Tusk2;
