import React from 'react';
import NavBar from './../components/nav_bar.jsx';

const Help = () => (
  <div>
    <NavBar />
    <h1 className='help-question'>How to use the app?</h1>
    <p className='help-item item-1'>Browse the different jobs</p>
    <p className='help-item item-2'>
    Swipe right if you like the job or left if you do not like it</p>
    <p className='help-item item-3'>You can also click on the LIKE and DISLIKE buttons</p>
    <p className='help-item item-4'>Click LIST to see the jobs that you like</p>
    <p className='help-item item-5'>Click HOME to go back to jobs</p>
  </div>
);

export default Help;
