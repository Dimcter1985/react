
const Events = () => {
  const showMessage = (num) => alert(num);
  const showEvent = (txt1, event, txt2) =>
    console.log(txt1, event.target, txt2);

  return (
    <div>
      <h3>Events</h3>
      <button onClick={() => showMessage(1)}>1</button>
      <button onClick={() => showMessage(2)}>2</button>
      <button onClick={() => showMessage(3)}>3</button>
      <hr />
      <button
        onClick={(event) => showEvent("событие в эл-те", event, "произошло")}
      >
        event
      </button>
    </div>
  );
}

export default Events;