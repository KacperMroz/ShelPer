import React from 'react';
import { LoginForm } from '../Login/LoginForm';
import Background from '../../img/background-login.png';

export const Login = () => {
  return (
    <div>
        <img src={Background} alt="background" />
        <LoginForm />
    </div>
  );
};
