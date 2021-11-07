
const Functions = () => {
  const getDigitsSum = (num) =>
    String(num)
      .split("")
      .reduce((sum, el) => +sum + +el);

  return (
    <div>
      <h3>Functions</h3>
      <p>сумма чисел = {getDigitsSum(123)}</p>
    </div>
  );
}

export default Functions;