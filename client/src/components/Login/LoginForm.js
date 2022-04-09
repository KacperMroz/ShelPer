import React, { useState } from 'react';
import { Button } from '../UI/Button';

export const LoginForm = () => {
  //login page
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const setUsernameHandler = event => {
    setUsername(event.target.value);
  };
  const setPasswordHandler = event => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (username === 'admin' && password === 'admin') {
            setError('');
            window.location.href = '/';
          } else {
            setError('Invalid username or password');
          }
        }}
      >
        <div>
          <label>Username</label>
          <input type='text' value={username} onChange={setUsernameHandler} />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={setPasswordHandler}
          />
        </div>
        <div>
          <Button type='submit'>Login</Button>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};
