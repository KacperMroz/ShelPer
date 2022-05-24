import React, { useState } from 'react';
import './LoginForm.css';
import { NavLink as Link, useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  //login page
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const user = {
    email,
    password,
  };

  const loginUser = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.message) {
        setError(data.message);
      }
      if (document.cookie) {
        const token = document.cookie.split('=')[1];
        localStorage.setItem('token', token);
        console.log(token);
        navigate('/animals');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setEmailHandler = event => {
    setEmail(event.target.value);
  };
  const setPasswordHandler = event => {
    setPassword(event.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    loginUser();
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
