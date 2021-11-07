
const Conditions = () => {
  const isAdult = true
  const isAdmin = false


  return (
    <div>
      <h3>Conditions</h3>
      {
        isAdult ? <p>Взрослый</p> : <p>Ребенок</p>
      }
      {
        isAdmin && <p>admin</p>
      }
    </div>
  );
}

export default Conditions;