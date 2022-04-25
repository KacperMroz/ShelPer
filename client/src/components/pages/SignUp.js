import React from 'react';
import { Button } from '../UI/Button';
import './Login.css';
import NavBar from '../NavBar';
import Background from '../../img/background-login.png';

export const SignUp = () => {
  return (
    <div className="login-page">
    <NavBar />
    <div className="login-page-content">
      <div className="dog-container">
        <img src={Background} alt="background" />
      </div>
      <div className='choose-type'>
      <h1 className='head'>Wybierz typ swojego konta</h1>
      <div className='buttons-div'>
      <Button text='Osoba prywatna' navigate='/sign-up-personal' />
      <Button text='Schronisko' navigate='/sign-up-shelter' />
      </div>
      </div>
    </div>
  </div>
  );
};
