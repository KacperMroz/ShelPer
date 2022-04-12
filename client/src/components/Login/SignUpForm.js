import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { NavLink as Link } from 'react-router-dom';

export const SignUpForm = ({ text, navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const setUsernameHandler = event => {
    setEmail(event.target.value);
  };
  const setPasswordHandler = event => {
    setPassword(event.target.value);
  };
  const setConfirmPasswordHandler = event => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (email === 'admin' && password === 'admin') {
            setError('');
            window.location.href = '/';
          } else {
            setError('Invalid email or password');
          }
        }}
      >
        <h1 className={'header'}>Zarejestruj się</h1>
        <div>
          <input
            type='text'
            value={email}
            onChange={setUsernameHandler}
            placeholder={'Podaj swój e-mail'}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            onChange={setPasswordHandler}
            placeholder={'Podaj swoje hasło'}
          />
        </div>
        <div>
          <input
            type='password'
            value={confirmPassword}
            onChange={setConfirmPasswordHandler}
            placeholder={'Podaj swoje hasło'}
          />
        </div>
        <div>
          <Button text={text} navigate={navigate} />
        </div>
        <div>
          Posiadasz konto? <Link to='/login'>Zaloguj się</Link>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};
