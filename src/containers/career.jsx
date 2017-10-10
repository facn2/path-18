import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from './../components/nav_bar.jsx';
import CareerCard from './../components/career_card.jsx';
import CareerInfo from './../components/career_info.jsx';

class Career extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };

    this.nextCareer = this.nextCareer.bind(this);
  }

  nextCareer() {
    const stateIndex = this.state.currentIndex;
    if (stateIndex < this.props.careers.length - 1) {
      this.setState({
        currentIndex: stateIndex + 1
      });
    } else {
      this.setState({
        currentIndex: 0
      });
    }
  }

  render() {
    return (

        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div class="flipper">
		<div class="front">
      <h1>This is career page</h1>
      <NavBar />
      <CareerCard id='swipeZone' career={this.props.careers[this.state.currentIndex]}/>
      <button>info</button>
		</div>
		<div class="back">
      <CareerInfo career={this.props.careers[1]}/>
      <button id='like' onClick={() => {
        this.nextCareer();
      }}>LIKE</button>
      <button id='dislike' onClick={() => {
        this.nextCareer();
      }}>DISLIKE</button>
		</div>
	</div>
</div>
    );
  }
}

Career.propTypes = {
  careers: PropTypes.array
};

const mapStateToProps = state => ({
  careers: state.careers
});

export default connect(mapStateToProps)(Career);
