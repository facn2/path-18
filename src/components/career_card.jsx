import React from 'react';
import PropTypes from 'prop-types';

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
