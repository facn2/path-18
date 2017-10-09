import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CareerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={this.props.career.image} />
        <h2>{this.props.career.title}</h2>
        <p>{this.props.career.tagline}</p>
      </div>
    );
  }
}

CareerCard.propTypes = {
  career: PropTypes.obj
};
export default CareerCard;
