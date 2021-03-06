import React from 'react';
import { LoginForm } from '../Login/LoginForm';
import NavBar from '../NavBar';
import Background from '../../img/background-login.png';
import './Login.css';

export const Login = () => {
  return (
    <div className="login-page">
      <NavBar />
      <div className="login-page-content">
        <div className="dog-container">
          <img src={Background} alt="background" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
