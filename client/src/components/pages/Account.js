import React from 'react';
import NavBar from '../../components/NavBar';
import { Button } from '../UI/Button';

const Account = () => {
  return (
    <div>
      <NavBar />
      <h1>Ustawienia</h1>
      <Button text='Ustawienia konta' navigate={'/account-settings'} />
      <Button text='Zachowanie aplikacji' navigate={'/account-app-behavior'} />
      <Button text='Wyloguj' navigate={'/logout'} />
    </div>
  );
};

export default Account;
