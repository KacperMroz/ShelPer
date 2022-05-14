import React from 'react';
import NavBar from '../../components/NavBar';
import { Button } from '../UI/Button';
import './Account.css';

const Account = () => {
  return (
    <div className='acc-home-div'>
      <NavBar />
      <div className='acc-content-div'>
      <h1 className='title'>Ustawienia</h1>
      <Button text='Ustawienia konta' navigate={'/account-settings'} />
      <Button text='Zachowanie aplikacji' navigate={'/account-app-behavior'} />
      <Button text='Wyloguj' navigate={'/logout'} />
      </div>
    </div>
  );
};

export default Account;
