import { useState } from "react";

const States = () => {
  const [firstName, setFirstName] = useState("Dmitry");
  const [lastName, setLastName] = useState("Dmitriev");
  let [age, setAge] = useState(36);
  const [banned, setBan] = useState(false);
  const [simbols, setSimbols] = useState('');

  const changeFirstName = (ev) => setFirstName(ev.target.value);
  const changeLastName = (ev) => setLastName(ev.target.value);
  const ban = () => setBan(!banned);
  const ageUp = () => {
    if (age <= 120) {
      setAge(age + 1);
    }
  };
  const ageDown = () => {
    if (age >= 1) {
      setAge(age -1);
    }
  };

  const showSimbols = (ev) => setSimbols(ev.target.value);

  return (
    <div>
      <h3>States</h3>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
      <p>{banned ? "забанен" : "не забанен"}</p>
      <p>колличество символов = {simbols.length}</p>
      <hr />
      <input onChange={changeFirstName} value={firstName} />
      <br />
      <input onChange={changeLastName} value={lastName} />
      <br />
      <button onClick={ban}>{banned ? "разбанить" : "забанить"}</button>
      <hr />
      <button onClick={ageUp}>+</button>
      <button onClick={ageDown}>-</button>
      <hr />
      <input value={simbols} onChange={showSimbols}/>
    </div>
  );
};

export default States;
