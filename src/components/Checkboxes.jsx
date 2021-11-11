import { useState } from 'react';

const Checkboxes = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = () => setChecked(!checked)
  const showText = () => {
    let txt = document.querySelector("#txt");
    checked ? txt.textContent = 'hello' : txt.textContent = 'goodbye';
  }

  const [checked2, setChecked2] = useState(false)
  const handleChange2 = () => setChecked2(!checked2)

  const [checked3, setChecked3] = useState(false)
  const handleChange3 = () => setChecked3(!checked3)

  return (
    <div>
      <h3>Checkboxes</h3>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <button onClick={showText}>hello</button>
      <p id="txt"></p>
      <input type="checkbox" checked={checked2} onChange={handleChange2} />
      {checked2 ? (
        <div>
          <h2>Ура, вам уже есть 18</h2>
          <p>здесь расположен контент только для взрослых</p>
        </div>
      ) : (
        <div>
          <p>увы, вам еще нет 18 лет:(</p>
        </div>
      )}
      <input type="checkbox" checked={checked3} onChange={handleChange3} />
      {checked3 && <p>sdggdfgs</p>}
    </div>
  );
}

export default Checkboxes;