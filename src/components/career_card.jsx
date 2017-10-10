import React, { Component } from 'react';
import PropTypes from 'prop-types';

let touchStart = 0;
let touchEnd = 0;

const handleSwipe = (event) => {
  if (touchEnd < touchStart - 10) {
    console.log('swiped: left!');
  }
  if (touchEnd > touchStart + 10) {
    console.log('swiped: right!');
  }
};

const handleTouchStart = (event) => {
  touchStart = event.changedTouches[0].screenX;
  console.log('start ', touchStart);
};

const handleTouchEnd = (event) => {
  touchEnd = event.changedTouches[0].screenX;
  console.log('end ', touchEnd);
  handleSwipe();
};

const CareerCard = ({ career }) => (
  <div
    onTouchStart={event => handleTouchStart(event)}
    onTouchEnd={event => handleTouchEnd(event)} >
    <img src={career.image} />
    <h2>{career.title}</h2>
    <p>{career.tagline}</p>
  </div>
);

CareerCard.propTypes = {
  career: PropTypes.object
};

export default CareerCard;
