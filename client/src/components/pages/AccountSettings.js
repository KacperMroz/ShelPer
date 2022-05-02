import React, { useState } from 'react';
import NavBar from '../NavBar';
import { Button } from '../UI/Button';

const AccountSettings = () => {
  // password visibility toggle button
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <div>
      <NavBar />
      <h1>Ustawienia konta</h1>
      <div>
        <span>E-mail</span>
        <input type='text' />
      </div>
      <div>
        <span>Hasło</span>
        <input type={passwordVisibility ? 'text' : 'password'} />
        <button onClick={togglePasswordVisibility}>
          {passwordVisibility ? 'Ukryj' : 'Pokaż'}
        </button>
      </div>
      <div>
        <span>Powtórz hasło</span>
        <input type={passwordVisibility ? 'text' : 'password'} />
      </div>
      <Button text='Zatwierdź zmiany' />
    </div>
  );
};

export default AccountSettings;
