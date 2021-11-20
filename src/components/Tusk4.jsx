import { useState } from "react";
//библиотека для получения уникального id 
import { nanoid } from "nanoid";

const Tusk4 = () => {
  //создаем заготовку для нового объекта
  const getInitObj = () => {
    return {
      id: nanoid(),
      prop1: "",
      prop2: "",
      prop3: "",
    };
  };

  //создаем массив объектов
  const initNotes2 = [
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

  //задаем начальные значения в стейтах
  const [notes2, setNotes2] = useState(initNotes2);
  const [obj, setObj] = useState(getInitObj());

  //создаем таблицу
  const createTable2 = notes2.map((el) => (
    <tr key={el.id}>
      <td>{el.prop1}</td>
      <td>{el.prop2}</td>
      <td>{el.prop3}</td>
    </tr>
  ));

  //добавляем значение инпута в объект
  const changeProp = (prop, event) =>
    setObj({ ...obj, [prop]: event.target.value });

  //добавляем новый объект в массив 
  const addItem = () => {
    setNotes2([...notes2, obj]);
    setObj(getInitObj());
  };

  return (
    <div>
      <h3>Tusk4</h3>
      <table>
        <tbody>{createTable2}</tbody>
      </table>
      <br />
      <input
        value={obj.prop1}
        onChange={(event) => changeProp("prop1", event)}
      />
      <input
        value={obj.prop2}
        onChange={(event) => changeProp("prop2", event)}
      />
      <input
        value={obj.prop3}
        onChange={(event) => changeProp("prop3", event)}
      />
      <br />
      <button onClick={addItem}>add</button>
    </div>
  );
};

export default Tusk4;
