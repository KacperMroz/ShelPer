import React, { useRef, useState } from 'react';
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
  const [web_page, setWebiste] = useState('');
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
    web_page
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
      setError('Has??o musi mie?? przynajmniej 6 znak??w');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Has??a nie s?? identyczne.');
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

  const goToAdditionalInfoSection = () => {
    additionalInfoSection.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className='sign-form-shelter-container'>
      <form className='shelter-form' onSubmit={submitHandler}>
        <div className='basic-shelter-form'>
          <h1 className='shelter-header'>Zarejestruj si??</h1>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className='shelter-input-div'>
            <input
              className='shelter-sign-input'
              type='text'
              value={email}
              onChange={setUsernameHandler}
              placeholder={'Podaj sw??j e-mail'}
            />
            <input
              className='shelter-sign-input'
              type='password'
              value={password}
              onChange={setPasswordHandler}
              placeholder={'Podaj swoje has??o'}
            />
            <input
              className='shelter-sign-input'
              type='password'
              value={confirmPassword}
              onChange={setConfirmPasswordHandler}
              placeholder={'Podaj swoje has??o'}
            />
            <button
              className='go-bottom-button'
              type='button'
              onClick={goToAdditionalInfoSection}
            >
              {text}
            </button>
          </div>
          <div>
            Posiadasz konto? <Link to='/login'>Zaloguj si??</Link>
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
              placeholder={'Podaj ulic?? schroniska'}
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
              placeholder={'Podaj miejscowo????'}
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
              value={web_page}
              onChange={setWebsiteHandler}
              placeholder={'Podaj stron?? internetow??'}
            />
          </div>
          <button
            className='log-sign-button'
            type='submit'
            onClick={submitHandler}
          >
            Zarejestruj si??
          </button>
        </div>
      </form>
    </div>
  );
};
