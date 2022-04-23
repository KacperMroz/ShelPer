import React from 'react';
import Logo from '../../img/logo.svg';
import { NavLink as Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getNavBarItems } from './utils';
import './index.css';
library.add(faMagnifyingGlass);

const NavBar = ({ isLoggedIn = false }) => {
  const items = getNavBarItems(isLoggedIn);

  return (
    <div className='navbar'>
      <div className='nav-items'>
        <Link to='/'>
          <img src={Logo} className='navbar-brand' alt='logo' />
        </Link>
        {items.map(item => {
          return <Link to={item.route}>{item.title}</Link>;
        })}
      </div>
      <div className='search'>
        <Link to='/search'>
          <FontAwesomeIcon className='icon ' icon='search' />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
