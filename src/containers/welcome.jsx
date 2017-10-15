import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../public/images/logo.png';

const Welcome = () => (
  <div>
    <img src={logoImg} alt="Path 18 Logo"/>
    <p> Welcome to our app.
     We aim to show you lots of jobs to help you decide on a suitable career path.
     We also give you lots of info on the degrees and grades you need. Hope you enjoy it!</p>
    <Link to='/career'>START</Link>
  </div>
);

export default Welcome;
