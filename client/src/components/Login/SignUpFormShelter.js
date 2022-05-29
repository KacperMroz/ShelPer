import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../UI/Button';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import './SignUpForm.css';

export const SignUpFormShelter = ({ text }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [streetName, setStreetName] = useState('');
  const [town_id, setTownId] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebiste] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const shelter = {
    email,
    password,
    name: 'Michael',
    town_id,
    phone_number: phoneNumber,
    building_number: number,
    street_name: streetName,
    zip_code: postalCode,
  };

  const setUsernameHandler = event => {
    setEmail(event.target.value);
  };
  const setPasswordHandler = event => {
    setPassword(event.target.value);
  };
  const setConfirmPasswordHandler = event => {
    setConfirmPassword(event.target.value);
  };
  const setStreetNameHandler = event => {
    setStreetName(event.target.value);
  };
  const setNumberHandler = event => {
    setNumber(event.target.value);
  };
  const setCityHandler = event => {
    setCity(event.target.value);
  };
  const setPostalCodeHandler = event => {
    setPostalCode(event.target.value);
  };
  const setPhoneNumberHandler = event => {
    setPhoneNumber(event.target.value);
  };
  const setWebsiteHandler = event => {
    setWebiste(event.target.value);
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

  const setTownIdHandler = () => {
    switch (city) {
      case 'Krakow':
        setTownId(1);
        break;
      case 'Warszawa':
        setTownId(2);
        break;
      case 'Wroclaw':
        setTownId(3);
        break;
      case 'Poznan':
        setTownId(4);
        break;
      case 'Bydgoszcz':
        setTownId(5);
        break;
      case 'Katowice':
        setTownId(6);
        break;
      case 'Gliwice':
        setTownId(7);
        break;
      case 'Szczecin':
        setTownId(8);
        break;
      case 'Gdansk':
        setTownId(9);
        break;
      default:
        setTownId(Math.floor(Math.random() * 9) + 1);
    }
    console.log(town_id);
  };

  const sendShelterData = async () => {
    if (!validateForm()) {
      return;
    }
    const response = await fetch('api/auth/register/shelter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shelter),
    });
    const data = await response.json();
    if (data.error) {
      setError(data.error);
    } else {
      navigate('/login');
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log(shelter);
    sendShelterData();
  };

  const additionalInfoSection = useRef(null);

  const goToAdditionalInfoSection = () =>
    window.scrollTo({
      top: additionalInfoSection.current.offsetTop,
      behavior: 'smooth',
    });

  return (
    <div className='sign-form-shelter-container'>
      <form className='shelter-form' onSubmit={submitHandler}>
        <div className='basic-shelter-form'>
          <h1 className='shelter-header'>Zarejestruj się</h1>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className='shelter-input-div'>
            <input
              className='shelter-sign-input'
              type='text'
              value={email}
              onChange={setUsernameHandler}
              placeholder={'Podaj swój e-mail'}
            />
            <input
              className='shelter-sign-input'
              type='password'
              value={password}
              onChange={setPasswordHandler}
              placeholder={'Podaj swoje hasło'}
            />
            <input
              className='shelter-sign-input'
              type='password'
              value={confirmPassword}
              onChange={setConfirmPasswordHandler}
              placeholder={'Podaj swoje hasło'}
            />
            {/* Zmieniłem to delikatnie, żeby móc automatycznie scrollowac do dołu, ale nie wiem czy nie zepsuje to logiki */}
            {/* <Button text={text} navigate={navigate}/> */}
            <button
              className='go-bottom-button'
              onClick={goToAdditionalInfoSection}
            >
              {text}
            </button>
          </div>
          <div>
            Posiadasz konto? <Link to='/login'>Zaloguj się</Link>
          </div>
        </div>

        <div className='additional-shelter-form'>
          <h2 className='shelter-header' ref={additionalInfoSection}>
            Potrzebujemy jeszcze kilku informacji
          </h2>
          <div className='shelter-input-div'>
            <input
              className='shelter-sign-input'
              type='text'
              value={streetName}
              onChange={setStreetNameHandler}
              placeholder={'Podaj ulicę schroniska'}
            />
          </div>
          <div className='shelter-input-div'>
            <input
              className='shelter-sign-input'
              type='text'
              value={number}
              onChange={setNumberHandler}
              placeholder={'Podaj numer budynku'}
            />
          </div>
          <div className='shelter-input-div'>
            <input
              className='shelter-sign-input'
              type='text'
              value={city}
              onChange={setCityHandler}
              onBlur={setTownIdHandler}
              placeholder={'Podaj miejscowość'}
            />
          </div>
          <div className='shelter-input-div'>
            <input
              className='shelter-sign-input'
              type='text'
              value={postalCode}
              onChange={setPostalCodeHandler}
              placeholder={'Podaj kod pocztowy'}
            />
          </div>
          <div className='shelter-input-div'>
            <input
              className='shelter-sign-input'
              type='text'
              value={phoneNumber}
              onChange={setPhoneNumberHandler}
              placeholder={'Podaj numer telefonu'}
            />
          </div>
          <div className='shelter-input-div'>
            <input
              className='shelter-sign-input'
              type='text'
              value={website}
              onChange={setWebsiteHandler}
              placeholder={'Podaj stronę internetową'}
            />
          </div>
          <button
            className='log-sign-button'
            type='submit'
            onClick={submitHandler}
          >
            Zarejestruj się
          </button>
        </div>
      </form>
    </div>
  );
};
