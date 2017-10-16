import React from 'react';
import PropTypes from 'prop-types';

const CareerInfo = ({ career }) => (
  <div>
    <img className='career-img' src={career.image} />
    <h2 className='career-title' >{career.title}</h2>
    <p className='career-description'>{career.description}</p>
  </div>
);

CareerInfo.propTypes = {
  career: PropTypes.object
};

export default CareerInfo;
