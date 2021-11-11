import { useState } from "react";
import dayjs from "dayjs";

const Inputs = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const changeValue1 = (ev) => setValue1(ev.target.value);
  const changeValue2 = (ev) => setValue2(ev.target.value);

  const sum = () => setResult(Number(value1) + Number(value2));
  const multiply = () => setResult(Number(value1) * Number(value2));

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [diff, setDiff] = useState("");

  const changeDate1 = (ev) => setDate1(ev.target.value);
  const changeDate2 = (ev) => setDate2(ev.target.value);

  const showDiff = () => {
    let d1 = dayjs(date1);
    let d2 = dayjs(date2);

    setDiff(d1.diff(d2, "day"));
  };

  const [res, setRes] = useState(null);

  const toSum = (ev) => {
    if(ev.target.value) {
      let result = ev.target.value.split('').reduce((s, el) => (+s + +el))
      setRes(result)
    }
  }

  return (
    <div>
      <h3>Inputs</h3>
      <p>{result}</p>
      <input value={value1} onChange={changeValue1} />
      <input value={value2} onChange={changeValue2} />
      <br />
      <button onClick={sum}>sum</button>
      <button onClick={multiply}>multiply</button>
      <br />
      <br />
      <input type="date" value={date1} onChange={changeDate1} />
      <input type="date" value={date2} onChange={changeDate2} />
      <button onClick={showDiff}>разница</button>
      <p>{diff}</p>
      <input onBlur={toSum} type='number'/>
      <p>{res}</p>
    </div>
  );
};

export default Inputs;
