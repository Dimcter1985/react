import { useState } from "react";

const Forms = () => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [result, setResult] = useState(0)

  const changeValue1 = (ev) => setValue1(ev.target.value)
  const changeValue2 = (ev) => setValue2(ev.target.value)

  const sum = () => setResult(Number(value1) + Number(value2))
  const multiply = () => setResult(Number(value1) * Number(value2))

  return (
    <div>
      <h3>Forms</h3>
      <p>{result}</p>
      <input value={value1} onChange={changeValue1}/>
      <input value={value2} onChange={changeValue2}/><br />
      <button onClick={sum}>sum</button>
      <button onClick={multiply}>multiply</button>
    </div>
  );
}

export default Forms;