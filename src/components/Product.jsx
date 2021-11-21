const Product = ({id, name, cost, cart, add}) => {
  return (
    <>
      <p>{name}</p>
      <p>{cost}</p>
      <p>{cart ? 'в корзине' : 'пусто'}</p>
      <button onClick={() => add(id)}>{cart ? 'remove' : 'add to cart'}</button>
    </>
    
  );
};

export default Product;
