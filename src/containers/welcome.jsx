import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../public/images/logo.png';

const Welcome = () => (
  <div className="container">
    <img className="logo" src={logoImg} alt="Path 18 Logo"/>
    <p>Path 18 shows you a variety of jobs and
    required grades and degree to help you guide on a desired career path.
      <br></br>Hope you enjoy it</p>
    <Link className="startButton" to='/career'><span>START</span></Link>
  </div>
);

export default Welcome;
