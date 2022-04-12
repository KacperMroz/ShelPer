import React from 'react';
import { LoginForm } from '../Login/LoginForm';
import { NavBar } from '../NavBar/NavBar.js';
import Background from '../../img/background-login.png';
import './Login.css';

export const Login = () => {
  return (
    <div className='base-container'>
      <NavBar />
      <div className='dog-container'>
        <img src={Background} alt='background' />
      </div>
      <LoginForm />
    </div>
  );
};
