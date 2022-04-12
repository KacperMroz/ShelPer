import React from 'react';
import { Button } from '../UI/Button';

export const SignUp = () => {
  return (
    <div>
      <h1>Wybierz typ swojego konta</h1>
      <Button text='Osoba prywatna' navigate='/sign-up-personal' />
      <Button text='Schronisko' navigate='/sign-up-shelter' />
    </div>
  );
};
