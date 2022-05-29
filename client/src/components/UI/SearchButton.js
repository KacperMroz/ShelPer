import React from 'react';
import classes from './SearchButton.module.css';
import {Link} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass);

export const SearchButton = (props) => {
  return (
    <Link to={'/animals'} className={classes.search}>
        <FontAwesomeIcon icon="search" className={classes.icon} />
        <div className={classes.text}>{props.text}</div>
    </Link>
  );
};
