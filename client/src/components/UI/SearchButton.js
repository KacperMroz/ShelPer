import React from 'react';
import classes from './SearchButton.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass);

export const SearchButton = props => {
  return (
    <div className={classes.search}>
      <FontAwesomeIcon icon='search' />
      <div> {props.text} </div>
    </div>
  );
};
