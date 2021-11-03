
const Example1 = () => {
  const rows = [1, 2, 3];
  const cells = [1, 2, 3];
  const num1 = 3;
	const num2 = 2;

  return (
    <div>
      <h3>Example1</h3>
      <table className="table">
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              {cells.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>{num1 ** num2}</div>
    </div>
  );
}

export default Example1;