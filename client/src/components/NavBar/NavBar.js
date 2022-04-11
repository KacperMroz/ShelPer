import React from 'react';
import Logo from '../../img/logo.svg';
import { NavLink as Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
library.add(faMagnifyingGlass)

export const NavBar = () => {
  return <div className='navbar'>
    {/* <nav> */}
      <div className = "login">
        <Link to="/">
          <img src={Logo} className="navbar-brand" alt="logo" />
        </Link>
        <Link id='home' to="/">Strona główna</Link>
        <div className='login_line'>
        <Link id= "login" to="/login"> Zaloguj się</Link>
        {/* <div className = "line">____</div> */}
        <a className="line">______</a>
        </div>
        <Link id = "signupid" to="/signup">Zarejestruj się</Link>
      </div>
      <div className = "search">
        <Link to="/search">
          <FontAwesomeIcon  className = "icon " icon="search" />
        </Link>
      </div>
    {/* </nav> */}
  </div>;
};
