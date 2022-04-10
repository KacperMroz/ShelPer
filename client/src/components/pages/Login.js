import React from 'react';
import { LoginForm } from '../Login/LoginForm';
import Background from '../../img/background-login.png';
import './Login.css';

export const Login = () => {
  return (
    <div class = 'base-container'>
      <div class = 'dog-container'>
        <img src={Background} alt="background" />
      </div>
      <LoginForm />
    </div>
  );
};
