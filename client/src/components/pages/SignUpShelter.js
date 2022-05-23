import React from 'react';
import { SignUpFormShelter } from '../Login/SignUpFormShelter';

import Background from '../../img/background-login.png';
import './SignUpShelter.css';



export const SignUpShelter = () => {
  return (
    <div className='sign-shelter-container'>
      <div className='dog-container'>
      <img src={Background} alt='background' />
      </div>
      <SignUpFormShelter text='Przejdź dalej' navigate='/sign-up-shelter' />
    </div>
  );
};
