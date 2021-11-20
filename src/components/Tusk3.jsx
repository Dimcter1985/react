import { useState } from "react";

const Tusk3 = () => {
  const initNotes = [
    {
      id: "GYi9G_uC4gBF1e2SixDvu",
      prop1: "value11",
      prop2: "value12",
      prop3: "value13",
    },
    {
      id: "IWSpfBPSV3SXgRF87uO74",
      prop1: "value21",
      prop2: "value22",
      prop3: "value23",
    },
    {
      id: "JAmjRlfQT8rLTm5tG2m1L",
      prop1: "value31",
      prop2: "value32",
      prop3: "value33",
    },
  ];

  const [notes, setNotes] = useState(initNotes);

  const remItem = (id) => setNotes(notes.filter(el => el.id !== id));

  const createTable = notes.map((el) => (
    <tr key={el.id}>
      <td>{el.prop1}</td>
      <td>{el.prop2}</td>
      <td>{el.prop3}</td>
      <td><button onClick={() => remItem(el.id)}>delete</button></td>
    </tr>
  ));

  return (
    <div>
      <h3>Tusk3</h3>
      <table>
        <tbody>{createTable}</tbody>
      </table>
    </div>
  );
};

export default Tusk3;
