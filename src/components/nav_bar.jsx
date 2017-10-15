import React from 'react';
import { Link } from 'react-router-dom';
import List from 'react-icons/lib/fa/list-ul';
import Help from 'react-icons/lib/fa/question-circle';

const logo = require('../../public/images/logo_small.png');

const NavBar = () => (
  <div>
    <Link to='/list'><List size='2em'/></Link>
    <Link to='/career'><img size='2em' alt='logo' src={logo} /></Link>
    <Link to='/help'><Help size='2em'/></Link>
  </div>
);

export default NavBar;
