import { useState } from "react";
import { nanoid } from "nanoid";

const Tusk6 = () => {
  const initProds = [
    {
      id: nanoid(),
      name: "prod1",
      cost: "cost1",
      desc: "long description 1",
      comm: "my super comment 1",
    },
    {
      id: nanoid(),
      name: "prod2",
      cost: "cost2",
      desc: "long description 2",
      comm: "my super comment 2",
    },
    {
      id: nanoid(),
      name: "prod3",
      cost: "cost3",
      desc: "long description 3",
      comm: "my super comment 3",
    },
  ];

  const [desc, setDesc] = useState(false);
  const [comm, setComm] = useState(false);

  return (
    <div>
      <h3>Tusk6</h3>
      <ul>
        {initProds.map((el) => (
          <li key={el.id}>
            <p>{el.id}</p>
            <p>{el.name}</p>
            <p>{el.cost}</p>
            {desc && <p>{el.desc}</p>}
            {comm && <p>{el.comm}</p>}
            <button onClick={() => setDesc(!desc)}>desc</button>
            <button onClick={() => setComm(!comm)}>comm</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tusk6;
