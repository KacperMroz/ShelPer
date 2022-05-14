import React, { useState } from 'react';
import { Button } from '../UI/Button';
import './LoginForm.css';
import { NavLink as Link } from 'react-router-dom';

export const LoginForm = () => {
  //login page
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const database = [
    {
      email: 'admin@shelper.com',
      password: 'admin',
    },
    {
      email: 'user1@shelper.com',
      password: 'user1',
    },
  ];

  const setEmailHandler = event => {
    setEmail(event.target.value);
  };
  const setPasswordHandler = event => {
    setPassword(event.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const user = database.find(user => user.email === email);
    if (user) {
      if (user.password === password) {
        setIsSubmitted(true);
        setError('');
        console.log(user);
      } else {
        setError('Invalid password');
      }
    } else {
      setError('Invalid email');
    }
  };

  return (
    <div className='base-login-container'>
      <form className='log-sign-form' onSubmit={submitHandler}>
        <h1 className='header'>Zaloguj się</h1>
        <div className='input-div'>
          <div>
            <input
              className='log-sign-input'
              type='text'
              name='email'
              placeholder='Podaj swój e-mail'
              value={email}
              onChange={setEmailHandler}
            />
          </div>
          <div>
            <input
              className='log-sign-input'
              name='password'
              type='password'
              placeholder='Podaj swoje hasło'
              value={password}
              onChange={setPasswordHandler}
            />
          </div>
        </div>
        <div className='button-div'>
          <div>
            <button className='log-sign-button' type='submit'>
              {'Zaloguj się'}
            </button>
          </div>
          <div className='bottom-text'>
            Nie posiadasz konta? <Link to='/signup'>Zarejestruj się</Link>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
      </form>
    </div>
  );
};
