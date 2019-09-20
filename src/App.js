import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login'
import Forgotpass from './components/Forgotpass/Forgotpass'
import Register from './components/Register/Register'
import  Main from "./Main";
function App() {
  return (
    <Router basename={'/'}>
      <Switch>
        <Route exact path="/" component={withRouter(Login)} />
        <Route exact path="/forgotpass" component={withRouter(Forgotpass)} />
        <Route exact path="/register" component={withRouter(Register)} />
        {/* <Route exact path="/resetpassword/:token" component={withRouter(ResetPassword)} /> */}
        <Main />
      </Switch>
    </Router>
  );
}

export default App;
