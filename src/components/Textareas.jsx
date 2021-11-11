import cyrillicToTranslit from 'cyrillic-to-translit-js'
import { useState } from 'react';

const Textareas = () => {
  const [txt, setTXT] = useState('')

  const changeTxt = (ev) => setTXT(cyrillicToTranslit().transform(ev.target.value))
  return (
    <div>
      <h3>Textareas</h3>
      <textarea onChange={changeTxt}/>
      <p>{txt}</p>
    </div>
  );
}

export default Textareas;