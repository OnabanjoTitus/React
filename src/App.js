import logo from './logo.svg';
import './App.css';
import Titus from "./Titus";
import Male from "./Male";
import New from "./New";
function App() {
  let name='Titus'
  return (
    <div className="App">
      <h1>
      Hi my name is {name} and i am {4+3} years old;
      </h1>
      <Titus/>
      <Titus/>
      <Titus/>
      <Male color="green"height="14ft" weight="12ft"/>
      <Male color="black" height="15ft" weight="13ft"/>
      <Male color="brown" height="16ft" weight="14ft"/>
      <New color="red" height="155ft" weight="12ft"/>
      <New color="red" height="155ft" weight="12ft"/>
      <New color="red" height="155ft" weight="12ft"/>
      <New color="red" height="155ft" weight="12ft"/>
      

    </div>
  );
}

export default App;
