const Employee = ({ firstName, lastName, middleName, salary }) => (
  <div>
    <p>{firstName}</p>
    <p>{middleName}</p>
    <p>{lastName}</p>
    <p>{salary}</p>
    <hr />
  </div>
);

export default Employee;
