import React from 'react';
import { SearchButton } from '../UI/SearchButton';
import { Button } from '../UI/Button';
import NavBar from '../NavBar';
import dogImg from '../../img/background-index.png';
import './Home.css';


export const Home = () => {
  return (
    <div className='home-page'>
      <NavBar />
      <div className='home-page-content'>            
        <div className='text-container'>
          <SearchButton text='Znajdź ogłoszenie' />
            <div className='text-button'>
              <h1>Pomagajmy razem</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod, nisi vel consectetur interdum, nisl nisi.
                </p>
              <Button text='Zaloguj się' navigate='/login' />
            </div>
        </div>
        <div className='home-dog-container'>
          <img src={dogImg} alt='' />
        </div>
      </div>
   </div>
  );
};
