import React from 'react';
import PropTypes from 'prop-types';

const CareerCard = ({ career }) => (
  <div>
    <img className='career-img' src={career.image} />
    <h2 className='career-title'>{career.title}</h2>
    <p className='career-tagline'>{career.tagline}</p>
  </div>
);

CareerCard.propTypes = {
  career: PropTypes.object
};

export default CareerCard;
