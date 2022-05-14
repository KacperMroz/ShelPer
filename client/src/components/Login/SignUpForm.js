import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { NavLink as Link } from 'react-router-dom';
import './SignUpForm.css';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const user = {
    email,
    password,
    confirmPassword,
  };

  const emailHandler = event => {
    setEmail(event.target.value);
  };
  const passwordHandler = event => {
    setPassword(event.target.value);
  };
  const confirmPasswordHandler = event => {
    setConfirmPassword(event.target.value);
  };

  const validateEmail = email => {
    // check for @
    if (email.indexOf('@') === -1) {
      return false;
    }
    // check for .
    if (email.indexOf('.') === -1) {
      return false;
    }
    return true;
  };

  const validatePassword = password => {
    // check for length
    if (password.length < 6) {
      return false;
    }
    return true;
  };

  const validateForm = () => {
    if (!validateEmail(email)) {
      setError('Podaj poprawny adres e-mail.');
      return false;
    }
    if (!validatePassword(password)) {
      setError('Hasło musi mieć przynajmniej 6 znaków');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Hasła nie są identyczne.');
      return false;
    }
    return true;
  };

  const submitHandler = e => {
    e.preventDefault();
    if (validateForm()) {
      console.log(user);
    }
  };

  return (
    <div className='base-sign-up-container'>
      <form className='log-sign-form' onSubmit={submitHandler}>
        <h1 className={'header'}>Zarejestruj się</h1>
        <div className='input-div'>
          <div>
            <input
              className={'log-sign-input'}
              type='text'
              value={email}
              onChange={emailHandler}
              placeholder='Podaj swój e-mail'
            />
          </div>
          <div>
            <input
              className={'log-sign-input'}
              type='password'
              value={password}
              onChange={passwordHandler}
              placeholder='Podaj swoje hasło'
            />
          </div>
          <div>
            <input
              className={'log-sign-input'}
              type='password'
              value={confirmPassword}
              onChange={confirmPasswordHandler}
              onBlur={validatePassword}
              placeholder='Podaj ponownie swoje hasło'
            />
          </div>
        </div>
        <div>
          <button
            className='log-sign-button'
            type='submit'
            onClick={submitHandler}
          >
            Zarejestruj się
          </button>
          {/* <Button text={text} navigate={navigate} />
           */}
        </div>
        <div className='bottom-text'>
          Posiadasz konto? <Link to='/login'>Zaloguj się</Link>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};
