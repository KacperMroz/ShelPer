import React, { useState } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import './SignUpForm.css';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const user = {
    email,
    password,
    name: 'Michael',
    surname: 'Scott',
    phone_number: '123456789',
    town_id: 7,
    building_number: '48A',
    street_name: 'koscielna',
    zip_code: '12-340',
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

  // send data to server
  const sendUserData = async () => {
    if (validateForm()) {
      const response = await fetch('/api/auth/register/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        navigate('/animals');
      }
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    if (validateForm()) {
      console.log(user);
      //Send user data to server
      sendUserData();
      // Redirect to animals page
      // navigate('/animals');
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
