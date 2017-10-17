import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../public/images/logo.png';

const Welcome = () => (
  <div className="container">
    <img className="logo" src={logoImg} alt="Path 18 Logo"/>
    <p> Welcome to Path18.<br></br>
     Path18 shows you a variety of jobs,
     grades, degrees you need and even salary to help you guide on your career path. Enjoy!</p>
    <Link className="startButton" to='/career'><span>START</span></Link>
  </div>
);

export default Welcome;
