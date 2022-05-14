import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { NavLink as Link } from 'react-router-dom';
import './SignUpForm.css';

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

  const submitHandler = e => {
    e.preventDefault();
    if (email === 'admin' && password === 'admin') {
      setError('');
      window.location.href = '/';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='base-sign-up-container'>
      <form className='log-sign-form' onSubmit={submitHandler}>
        <h1 className={'header'}>Zarejestruj się</h1>
        <div className='input-div'>
          <div>
            <input
              className='log-sign-input'
              type='text'
              value={email}
              onChange={setUsernameHandler}
              placeholder={'Podaj swój e-mail'}
            />
          </div>
          <div>
            <input
              className='log-sign-input'
              type='password'
              value={password}
              onChange={setPasswordHandler}
              placeholder={'Podaj swoje hasło'}
            />
          </div>
          <div>
            <input
              className='log-sign-input'
              type='password'
              value={confirmPassword}
              onChange={setConfirmPasswordHandler}
              placeholder={'Podaj swoje hasło'}
            />
          </div>
        </div>
        <div>
          <Button text={text} navigate={navigate} />
        </div>
        <div className='bottom-text'>
          Posiadasz konto? <Link to='/login'>Zaloguj się</Link>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};
