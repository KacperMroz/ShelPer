import React from 'react';
import './index.css';

const Input = ({ value, placeholder, handleChange }) => (
  <input
    className="input"
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
  />
);
export default Input;
