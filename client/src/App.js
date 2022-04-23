import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { SignUp } from './components/pages/SignUp';
import { SignUpPersonal } from './components/pages/SignUpPersonal';
import { SignUpShelter } from './components/pages/SignUpShelter';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/sign-up-personal' element={<SignUpPersonal />} />
          <Route path='/sign-up-shelter' element={<SignUpShelter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
