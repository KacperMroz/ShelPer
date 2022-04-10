import React, { useState } from 'react';
import { Button } from '../UI/Button';
import {NavLink as Link} from "react-router-dom";

export const SignUpFormShelter = ({ text, navigate}) => {
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
                <h1 className={"header"}>Zarejestruj się</h1>
                <div>
                    <input type='text' value={email} onChange={setUsernameHandler} placeholder={"Podaj swój e-mail"} />
                </div>
                <div>
                    <input
                        type='password'
                        value={password}
                        onChange={setPasswordHandler}
                        placeholder={"Podaj swoje hasło"}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        value={confirmPassword}
                        onChange={setConfirmPasswordHandler}
                        placeholder={"Podaj swoje hasło"}
                    />
                </div>
                <div>
                    <Button text={text} navigate={navigate}/>
                </div>
                <div>Posiadasz konto? <Link to="/login">Zaloguj się</Link></div>

                <h2 className={"header"}>Potrzebujemy jeszcze kilku informacji</h2>
                <div>
                    <input type='text' value={streetName} onChange={setStreetNameHandler} placeholder={"Podaj ulicę schroniska"} />
                </div>
                <div>
                    <input type='text' value={number} onChange={setNumberHandler} placeholder={"Podaj numer budynku"} />
                </div>
                <div>
                    <input type='text' value={city} onChange={setCityHandler} placeholder={"Podaj miejscowość"} />
                </div>
                <div>
                    <input type='text' value={postalCode} onChange={setPostalCodeHandler} placeholder={"Podaj kod pocztowy"} />
                </div>
                <div>
                    <input type='text' value={phoneNumber} onChange={setPhoneNumberHandler} placeholder={"Podaj numer telefonu"} />
                </div>
                <div>
                    <input type='text' value={website} onChange={setWebsiteHandler} placeholder={"Podaj stronę internetową"} />
                </div>
                <Button text={"Zarejestruj się"} navigate={navigate}/>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </form>
        </div>
    );
};

export default SignUpFormShelter;
