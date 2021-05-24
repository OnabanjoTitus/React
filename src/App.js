import logo from './logo.svg';
import './App.css';

import Login from "./views/authPage/Login/Login";
import MoreButton from './components/reusables/MoreButton';
function App() {
  return (
    <div className="container">
    <Login/>
    <MoreButton/>
    </div>
  );
}

export default App;
