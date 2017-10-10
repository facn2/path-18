import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className='navBar'>
    <Link to='/career' className="navElement">Menu</Link>
    <Link to='/list' className="navElement">PATH 18 LOGO</Link>
    <Link to='/information' className="navElement">info</Link>
  </div>
);

export default NavBar;
