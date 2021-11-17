import { useState } from "react";

const Tusk1 = () => {
  const [notes, setNotes] = useState([1, 2, 3]);
  const index = 1;

  const addEl = () => setNotes([...notes, notes[notes.length - 1] + 1]);
  const deleteEl = () =>
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
  const changeEl = () => setNotes([...notes.slice(0, index), '!', ...notes.slice(index + 1)]);
  const reverseEls = () => {
    let copy = Object.assign([], notes);
    copy.reverse();
    setNotes(copy);
  }

  return (
    <div>
      <h3>Tusk1</h3>
      <button onClick={addEl}>+</button>
      <button onClick={deleteEl}>-</button>
      <button onClick={changeEl}>change</button>
      <button onClick={reverseEls}>reverse</button>
      <p>{notes.map((el) => `${el}, `)}</p>
    </div>
  );
};

export default Tusk1;
