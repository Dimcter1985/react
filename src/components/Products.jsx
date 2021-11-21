import Product from "./Product";
import { nanoid } from 'nanoid'
import {useState} from "react";

const initProds = [
  { id: nanoid(), name: "product1", cost: 100, inCart: false },
  { id: nanoid(), name: "product2", cost: 200, inCart: false },
  { id: nanoid(), name: "product3", cost: 300, inCart: false },
];

const Products = () => {
  const [prods, setProds] = useState(initProds);

  const addToCart = (id) => {
    setProds(prods.map((el) => {
      if(el.id === id) {
        el.inCart = !el.inCart
      }
      return el
    }))
  }

  return (
    <div>
      <h3>Products</h3>
      {prods.map((prod) => (
        <Product
          key={prod.id}
          id={prod.id}
          name={prod.name}
          cost={prod.cost}
          cart={prod.inCart}
          add={addToCart}
        />
      ))}
    </div>
  );
};

export default Products;
