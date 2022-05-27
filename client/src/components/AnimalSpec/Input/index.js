import React from 'react';
import './index.css';

const Input = ({ name, value, placeholder, handleChange }) => (
  <input
    className="input"
    type="text"
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
  />
);
export default Input;
