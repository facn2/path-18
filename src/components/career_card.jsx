import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CareerCard = ({ career }) => (
  <div className="careerCard">
    <div className="imgContainer">
      <img className="careerImg"src="https://www.atpworldtour.com/-/media/images/news/2017/01/29/23/06/federer-nadal-2011-atp-finals.jpg" />
    </div>
    <h2 className="careerTitle">{career.title}</h2>
    <p className="careerTagline">{career.tagline}</p>
  </div>
);

CareerCard.propTypes = {
  career: PropTypes.object
};

export default CareerCard;
