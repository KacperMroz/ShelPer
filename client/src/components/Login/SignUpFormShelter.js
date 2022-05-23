import React, { useRef, useState } from 'react';
import { Button } from '../UI/Button';
import { NavLink as Link } from 'react-router-dom';
import './SignUpForm.css';


export const SignUpFormShelter = ({ text, navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [streetName, setStreetName] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebiste] = useState('');
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

  const additionalInfoSection = useRef(null);

  const goToAdditionalInfoSection = () => window.scrollTo({
  top: additionalInfoSection.current.offsetTop,
  behavior: "smooth"
  })

  return (
    <div className='sign-form-shelter-container'>
      <form className='shelter-form'
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
        <div className='basic-shelter-form'>
        <h1 className='shelter-header'>Zarejestruj się</h1>
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
          <button className='go-bottom-button' onClick={goToAdditionalInfoSection}>
            {text}
          </button>
        </div>
        <div>
          Posiadasz konto? <Link to='/login'>Zaloguj się</Link>
        </div>
        </div>

        <div className='additional-shelter-form'>
        <h2 className='shelter-header' ref={additionalInfoSection}>Potrzebujemy jeszcze kilku informacji</h2>
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
        <Button text={'Zarejestruj się'} navigate={navigate} />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
      </form>
    </div>
  );
};
