import React from 'react';
import { SearchButton } from '../UI/SearchButton';
import { Button } from '../UI/Button';
import Background from '../../img/background-index.png';

export const Home = () => {
  return (
    <div>
      <SearchButton text='Znajdź ogłoszenie' />
      <div className='text-container'>
        <h1>Pomagajmy razem</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisi vel consectetur interdum, nisl nisi.
        </p>
      </div>
      <Button text='Zaloguj się' navigate='/login' />
      <img src={Background} alt='' />
    </div>
  );
};
