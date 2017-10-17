import React from 'react';
import { Link } from 'react-router-dom';
import List from 'react-icons/lib/fa/list-ul';
import Help from 'react-icons/lib/fa/question-circle';

const logoSmall = require('../../public/images/logo_small.png');

const NavBar = () => (
  <div className='nav-bar'>
    <Link to='/list'><List className='nav-item' size='3em'/></Link>
    <Link to='/career'><img className='nav-item nav-logo' size='2em' alt='logo' src={logoSmall} /></Link>
    <Link to='/help'><Help className='nav-item' size='4em'/></Link>
  </div>
);

export default NavBar;
