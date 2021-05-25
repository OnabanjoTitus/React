import logo from './logo.svg';
import './App.css';

import Login from "./views/authPage/Login/Login";
// import MoreButton from './components/reusables/MoreButton';
// import ReactTut from "./ReactTut";
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';

import Register from './views/authPage/register/Register';
import Header from './components/Headers'
function App() {
  return (
    <div className="container">
      {/* <ReactTut/> */}
    {/* <Login/> */}
    {/* <MoreButton/> */}
    <Router>
      <Header/>
        <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
          </Route>
    </Switch>

    </Router>

    </div>
  );
}

export default App;
 