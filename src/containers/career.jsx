import React from 'react';
import NavBar from './../components/nav_bar.jsx';
import CareerCard from './../components/career_card.jsx';

const Career = () => (
  <div>
    <h1>This is career page</h1>
    <NavBar />
    <CareerCard />
    <button>LIKE</button>
    <button>DISLIKE</button>
  </div>
);

export default Career;
