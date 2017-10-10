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
    this.addToLocal = this.addToLocal.bind(this);
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

  addToLocal() {
    const CareerIndex = this.state.currentIndex;
    if (localStorage.liked) {
      const Liked = JSON.parse(localStorage.liked);
      Liked.push(CareerIndex);
      localStorage.setItem('liked', JSON.stringify(Liked)); // (key of the localstorage, data sent to the storage)
    } else {
      const Liked = [this.state.currentIndex];
      localStorage.setItem('liked', JSON.stringify(Liked));
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <CareerCard id='swipeZone' career={this.props.careers[this.state.currentIndex]}/>
        <button>info</button>
        <CareerInfo career={this.props.careers[1]}/>
        <div className="buttonContainer">
          <button id='like' onClick={() => {
            this.nextCareer();
            this.addToLocal();
          }}>LIKE</button>
          <button id='dislike' onClick={() => {
            this.nextCareer();
          }}>DISLIKE</button>
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
