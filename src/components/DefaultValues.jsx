import { useState } from "react";

const DefaultValues = () => {
  const [value, setValue] = useState('text')
  const [checked, setChecked] = useState(true);
  
  return (
    <div>
      <h3>DefaultValues</h3>
      <input type="text" defaultValue={value} onChange={ev => setValue(ev.target.value)} />
      <input type="checkbox" defaultChecked={checked} onChange={ () => setChecked(!checked)}/>
      <p>{value}</p>
      <p>{checked === true ? 'true' : 'false'}</p>
    </div>
  );
}

export default DefaultValues;