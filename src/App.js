import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';

function App() {
  return (
    <div>
      <Form data="of register" classForm="formcss" classField="fieldcss" fieldLength="20">
      <button type="submit">Submit</button>
      </Form> 
    </div>
  );
}

export default App;
