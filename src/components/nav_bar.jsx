import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

  <div className='nav-bar'>
    <Link to='/career' className="nav-element">Menu</Link>
    <Link to='/list' className="nav-element">PATH 18 LOGO</Link>
    <Link to='/information' className="nav-element">info</Link>
    <Link to='/help'>help</Link>
  </div>
);

export default NavBar;
