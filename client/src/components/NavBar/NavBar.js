import React from 'react';
import Logo from '../../img/logo.svg';
import { NavLink as Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faMagnifyingGlass)

export const NavBar = () => {
  return <div>
    <nav>
        <Link to="/">
          <img src={Logo} className="navbar-brand" alt="logo" />
        </Link>
        <Link to="/login"> Zaloguj się</Link>
        <Link to="/signup">Zarejestruj się</Link>
        <Link to="/search">
          <FontAwesomeIcon icon="search" />
        </Link>
    </nav>
  </div>;
};
