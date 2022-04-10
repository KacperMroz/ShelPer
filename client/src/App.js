import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import { Login } from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import { SignUpPersonal } from './components/pages/SignUpPersonal';
import { SignUpShelter } from './components/pages/SignUpShelter';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signuppersonal' element={<SignUpPersonal />} />
        <Route path='/signupshelter' element={<SignUpShelter />} />
      </Routes>
    </Router>
  );
}

export default App;
