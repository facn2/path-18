import React from 'react';
import PropTypes from 'prop-types';

let touchStart = 0;
let touchEnd = 0;

const handleSwipe = (event) => {
  if (touchEnd < touchStart - 30) {
    console.log('swiped: left!');
  }
  if (touchEnd > touchStart + 30) {
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
  <div className="careerCard">
    onTouchStart={event => handleTouchStart(event)}
    onTouchEnd={event => handleTouchEnd(event)} >
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
