import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <Link to='/career'>career</Link>
    <Link to='/list'>list</Link>
    <Link to='/help'>help</Link>
  </div>
);

export default NavBar;
