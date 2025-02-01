import './App.css';
import { Crud } from './crud';
function App() {
  return <div> Hello </div>;
}

// CRUD

function Tasks({ tasks }) {
  // This is going to return the list
  return <div className="tasks"></div>;
}

// Parent componenet (App) passes userName as a prop to the Child Componeent (Greeting usesing this line. )
// NAME is the Prop Key . The name of the property thats passed to the child
// USERNAME is the variable holding the value being passed.

// Child Componenet
function Greeting({ name, age }) {
  return (
    <h1>
      {' '}
      Hello, {name} {age}{' '}
    </h1>
  );
}

function CustomButton({ onClick }) {
  return <button onClick={onClick}> CLick Me </button>;
}

export default App;
