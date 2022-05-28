import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import { Button } from '../UI/Button';
import classes from '../UI/Button.module.css';

const AccountSettings = () => {
  // password visibility toggle button
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [email, setEmail] = useState('');
  // set userType to 'client' or 'shelter' depending on letter C or S in token
  let userType =
    localStorage.getItem('token').charAt(0) === 'C' ? 'client' : 'shelter';
  let userId;
  if (userType === 'client') {
    userId = localStorage.getItem('token').split('C')[1];
  } else {
    userId = localStorage.getItem('token').split('S')[1];
  }

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  // get user email from backend
  const getEmail = async () => {
    const response = await fetch(`/user/${userType}/${userId}`);
    const data = await response.json();
    setEmail(data.email);
  };

  const logout = () => {
    // remove cookies
    localStorage.clear();
    window.location.href = '/';
  };

  useEffect(() => {
    getEmail();
  }, []);

  // update user email

  return (
    <div className='acc-home-div'>
      <NavBar />
      <div className='acc-content-div'>
        <h2 className='title'>Ustawienia konta</h2>
        <div className='acc-input-div'>
          <div>
            <span>E-mail</span>
            <input className='acc-input' type='text' value={email} />
          </div>
          <div>
            <span>Hasło</span>
            <input
              className='acc-input'
              type={passwordVisibility ? 'text' : 'password'}
            />
            {/* {
              <button onClick={togglePasswordVisibility}>
                {passwordVisibility ? 'Ukryj' : 'Pokaż'}
              </button>
            } */}
          </div>
          <div>
            <span>Powtórz hasło</span>
            <input
              className='acc-input'
              type={passwordVisibility ? 'text' : 'password'}
            />
          </div>
        </div>
        <button className={classes.button}>Zatwierdź zmiany</button>
        <button className={classes.button} onClick={logout}>
          Wyloguj
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
