import React from 'react';
import { SignUpForm } from '../Login/SignUpForm';
import NavBar from '../NavBar';
import Background from '../../img/background-login.png';
import './Login.css';

export const SignUpPersonal = () => {
  return (
    <div className="login-page">
      <NavBar />
      <div className="login-page-content">
        <div className="dog-container">
          <img src={Background} alt="background" />
        </div>
        <SignUpForm text='Zarejestruj się' navigate='' />
      </div>
    </div>
  );
};

