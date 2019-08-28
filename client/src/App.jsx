import React from 'react';
//import logo from './assets/logo.png';
import './App.scss';
import CustomNavbar from './components/CustomNavbar/CustomNavbar'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './components/Home/Home'
//import SignIn from './components/SignIn
//import SignUp from './components/SignUp
//import Learn from './components/Learn
//import Random from './components/Random

function App() {
  return (
    <Router>
      <div className="App">
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/*<Route path="/SignIn" component={SignIn} />*/}
        {/*<Route path="/SignUp" component={SignUp} />*/}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
