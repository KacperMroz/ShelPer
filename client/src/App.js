import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages';
import {Login} from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import {SignUpPersonal} from './components/pages/SignUpPersonal';
import {SignUpShelter} from './components/pages/SignUpShelter';

function App() {
  return (
    <Router>
      <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/sign-up-personal' component={SignUpPersonal} />
            <Route exact path='/sign-up-shelter' component={SignUpShelter} />
         </Switch>
    </Router>
  );
}

export default App;
