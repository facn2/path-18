import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div>
    <h1>Path18</h1>
    <p> Welcome to our app.
     We aim to show you lots of jobs to help you decide on a suitable career path.
     We also give you lots of info on the degrees and grades you need. Hope you enjoy it!</p>
    <button><Link to='/career'>START</Link></button>
  </div>
);

export default Welcome;
