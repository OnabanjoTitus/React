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
import AuthContainer from './views/authPage/AuthContainer';
import Posts from './views/posts/Posts';
function App() {
  return (
    <div className="container">
        <Router>
          <Switch>
                <Route path="/auth">
                    <AuthContainer/>
            </Route>
            <Route path="/posts">
                    <Posts/>
            </Route>
          </Switch>
        </Router>

        {/* <h4>Welcome To My playful React Application</h4>
      
         <>
        <Router>
       
            <Switch>
              <Route path="/login" component={Loginin}>
              </Route>
              <Route path="/register" component={Registration}>
                  
                  </Route>
    
              <Route path="" component={MainPage}>
              </Route>
             
            </Switch>

        </Router>
       </>  */}
          
      {/* <ReactTut/> */}
    {/* <Login/>
     <MoreButton/> */}

    {/* <Loginin/> */}
    {/* <SubmitButton color="black" text="Click here boy"/> */}
    

    </div>
  );
}

export default App;
 