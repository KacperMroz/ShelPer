import React, { useState } from 'react';
import { Button } from '../UI/Button';
import './LoginForm.css';
import useInput from '../../hooks/use-input';
import { NavLink as Link } from 'react-router-dom';

export const LoginForm = () => {
  //login page
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangedHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  );

  let formIsValid = false;

  // password validation
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangedHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(value => value.trim() !== '');

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const setUsernameHandler = event => {
    setEmail(event.target.value);
  };
  const setPasswordHandler = event => {
    setPassword(event.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    if (email === 'admin' && password === 'admin') {
      setError('');
      window.location.href = '/';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='base-login-container'>
      <form onSubmit={submitHandler}>
        <h1 className='header'>Zaloguj się</h1>
        <div className='input-div'>
          <div>
            <input
              type='text'
              value={email}
              onChange={setUsernameHandler}
              onBlur={emailBlurHandler}
              placeholder='Podaj swój e-mail'
            />
            {emailHasError && <p className='error-text'>Niepoprawny email</p>}
          </div>
          <div>
            <input
              type='password'
              value={password}
              onChange={setPasswordHandler}
              onBlur={passwordBlurHandler}
              placeholder='Podaj swoje hasło'
            />
            {passwordHasError && (
              <p className='error-text'>Niepoprawne hasło</p>
            )}
          </div>
        </div>
        <div className='button-div'>
          <div>
            <Button text='Zaloguj się' />
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
