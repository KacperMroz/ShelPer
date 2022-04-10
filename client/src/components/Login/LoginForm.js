import React, { useState } from 'react';
import { Button } from '../UI/Button';
import './LoginForm.css'
import {NavLink as Link} from "react-router-dom";

export const LoginForm = () => {
    //login page
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const setUsernameHandler = event => {
        setEmail(event.target.value);
    };
    const setPasswordHandler = event => {
        setPassword(event.target.value);
    };

    return (
        <div class='base-login-container'>
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
                <h1 className={"header"}>Zaloguj się</h1>
                <div className='input-div'>
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
                </div>
                <div class='button-div'>
                <div>
                    <Button text={'Zaloguj się'} />
                </div>
                <div className='bottom-text'>Nie posiadasz konta? <Link to="/register">Zarejestruj się</Link></div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                </div>
            </form>
        </div>
    );
};
