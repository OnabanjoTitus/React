import logo from './logo.svg';
import './App.css';

import Login from "./views/authPage/Login/Login";
// import MoreButton from './components/reusables/MoreButton';
// import ReactTut from "./ReactTut";
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';

import Register from './views/authPage/register/Register';
import Header from './components/Headers'
import Checkbox from './components/Checkbox';
import SubmitButton from './myPersonalReact/components/reusables/SubmitButton';
import Loginin from './myPersonalReact/components/Loginin';
import MainPage from './myPersonalReact/components/MainPage';
import Registration from './myPersonalReact/Registration';
function App() {
  return (
    <div className="container">
        <h4>Welcome To My playful React Application</h4>
       
        <Router>
           <MainPage/>
            <Switch>
              <Route path="/login">
                  <Loginin/>
              </Route>
              <Route path="/register">
                    <Registration/>
              </Route>

            </Switch>

        </Router>
       
          
      {/* <ReactTut/> */}
    {/* <Login/> */}
    {/* <MoreButton/> */}
    {/* <Router>
      <Header/>
        <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
          </Route>
    </Switch>

    </Router> */}
    {/* <Loginin/> */}
    {/* <SubmitButton color="black" text="Click here boy"/> */}
    

    </div>
  );
}

export default App;
 