import { nanoid } from 'nanoid'
import React from 'react';

const Objects = () => {
  const prods = [
    {name: 'product1', cost: 100},
    {name: 'product2', cost: 200},
    {name: 'product3', cost: 300},
  ];

  let changedProds = [];

  const createIds = () => {
    changedProds = prods.map((prod) => (
      {
        id: nanoid(),
        ...prod
      }
    ));
    return changedProds
  }
  createIds();

  return (
    <div>
      <h3>Objects</h3>
      <table>
        <tbody>
          {changedProds.map((el) => (
            <React.Fragment key={el.id}>
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.cost}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Objects;