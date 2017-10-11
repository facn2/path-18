import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div>
    <h1>Path18</h1>
    <p> Welcome to our app.
     We aim to show you lots of jobs to help you decide on a suitable career path.
     We also give you lots of info on the degrees and grades you need. Hope you enjoy it!</p>
    <Link to='/career'>START</Link>
  </div>
);

export default Welcome;
