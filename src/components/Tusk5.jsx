import { useState } from "react";

const Tusk5 = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <div>
      <h3>Tusk5</h3>
      <p>{visible1 ? 'some text 1' : ''}</p>
      <button onClick={() => setVisible1(!visible1)}>{visible1 ? 'hide' : 'show'}</button>
      <p>{visible2 ? 'some text 2' : ''}</p>
      <button onClick={() => setVisible2(!visible2)}>{visible2 ? 'hide' : 'show'}</button>
      <p>{visible3 ? 'some text 3' : ''}</p>
      <button onClick={() => setVisible3(!visible3)}>{visible3 ? 'hide' : 'show'}</button>
    </div>
  );
}

export default Tusk5;