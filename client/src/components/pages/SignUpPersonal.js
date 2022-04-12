import React from 'react';
import { SignUpForm } from '../Login/SignUpForm';

import Background from '../../img/background-login.png';

export const SignUpPersonal = () => {
  return (
    <div>
      <img src={Background} alt='background' />
      <SignUpForm text='Zarejestruj się' navigate='' />
    </div>
  );
};
