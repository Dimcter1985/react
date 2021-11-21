import './App.css';
import Base from './components/Base'
import Conditions from './components/Conditions'
import Functions from './components/Functions'
import Events from './components/Events'
import Objects from './components/Objects'
import States from './components/States'
import Inputs from './components/Inputs'
import Textareas from './components/Textareas'
import Checkboxes from './components/Checkboxes'
import Selects from './components/Selects'
import Radiobuttons from './components/Radiobuttons'
import DefaultValues from './components/DefaultValues'
import Tusk1 from './components/Tusk1'
import Tusk2 from './components/Tusk2'
import Tusk3 from './components/Tusk3.jsx'
import Tusk4 from './components/Tusk4.jsx'
import Tusk5 from './components/Tusk5.jsx'
import Tusk6 from './components/Tusk6.jsx'
import Employee from './components/Employee.jsx'
import Products from './components/Products.jsx'

function App() {

  return (
    <>
      <Base />
      <Conditions />
      <Functions />
      <Events />
      <Objects />
      <States />
      <Inputs />
      <Textareas />
      <Checkboxes />
      <Selects />
      <Radiobuttons />
      <DefaultValues />
      <Tusk1 />
      <Tusk2 />
      <Tusk3 />
      <Tusk4 />
      <Tusk5 />
      <Tusk6 />
      <h3>Employee</h3>
      <Employee
        firstName="Dmitiy"
        middleName="Dmitrievich"
        lastName="Rybnikov"
        salary="100 000 rub"
      />
      <Employee
        firstName="Roman"
        middleName="Dmitrievich"
        lastName="Rybnikov"
        salary="30 000 rub"
      />
      <Products />
    </>
  );
  
}

export default App;
