import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import classes from './Button.module.css';

export const Button = ( { text, navigate }) => {
  if (navigate === undefined) {
    navigate = '/';
  }
  return (
    <Link to={navigate} className={classes.button}>
      {text}
    </Link>
  )
};
