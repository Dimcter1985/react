import { useState } from "react";

const Tusck1 = () => {
  const [notes, setNotes] = useState([1, 2, 3]);
  const add = () => notes[notes.length - 1] + 1;

  return (
    <div>
      <h3>Tusck1</h3>
      <button onClick={() => setNotes([...notes, add()])}>
        +
      </button>
      <p>{notes.map((el) => `${el}, `)}</p>
    </div>
  );
};

export default Tusck1;
