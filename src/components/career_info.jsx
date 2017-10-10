import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CareerInfo = ({ career }) => (
  <div>
    <img src={career.image} />
    <h2>{career.title}</h2>
    <p>{career.description}</p>
  </div>
);

CareerInfo.propTypes = {
  career: PropTypes.object
};

export default CareerInfo;
