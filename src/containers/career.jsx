import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../components/nav_bar.jsx';
import CareerCard from './../components/career_card.jsx';
import CareerInfo from './../components/career_info.jsx';

let touchStart = 0;
let touchEnd = 0;

const handleTouchStart = (event) => {
  touchStart = event.changedTouches[0].screenX;
};

class Career extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
    this.addToLocal = this.addToLocal.bind(this);
    this.nextCareer = this.nextCareer.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.flipCardBack = this.flipCardBack.bind(this);
  }

  handleTouchEnd(event) {
    touchEnd = event.changedTouches[0].screenX;
    this.handleSwipe(event);
  }

  handleSwipe() {
    if (touchEnd < touchStart - 50) {
      this.nextCareer();
    }
    if (touchEnd > touchStart + 50) {
      this.addToLocal();
      this.nextCareer();
    }
  }

  nextCareer() {
    const stateIndex = this.state.currentIndex;
    if (stateIndex < this.props.careers.length - 1) {
      this.setState({
        currentIndex: stateIndex + 1
      });
    } else {
      this.setState({ currentIndex: 0 });
    }
  }

  flipCard() {
    document.querySelector('.flipper').classList.add('flip');
  }

  flipCardBack() {
    document.querySelector('.flipper').classList.remove('flip');
  }

  addToLocal() {
    const CareerTitle = this.props.careers[this.state.currentIndex].title;
    if (localStorage.liked) {
      const Liked = JSON.parse(localStorage.liked);
      Liked.push(CareerTitle);
      localStorage.setItem('liked', JSON.stringify(Liked)); // (key of the localstorage, data sent to the storage)
    } else {
      const Liked = [this.props.careers[this.state.currentIndex].title];
      localStorage.setItem('liked', JSON.stringify(Liked));
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="flip-container">
          <div id="swipeZone" className="flipper"
            onTouchStart={event => handleTouchStart(event)}
            onTouchEnd={event => this.handleTouchEnd(event)}>
            <div className="front">
              <CareerCard career={this.props.careers[this.state.currentIndex]}/>
              <button
                onClick={() => {
                  this.flipCard();
                }}> Info</button>
            </div>
            <div className="back">
              <CareerInfo career={this.props.careers[this.state.currentIndex]}/>
              <button className="btn1" onClick={() => {
                this.flipCardBack();
              }}> Flip Back </button>
            </div>
          </div>
        </div>
        <div className="like-btn">
          <button className='like' id='like' onClick={() => {
            this.nextCareer();
            this.addToLocal();
          }}>LIKE</button>
          <button className='dislike' id='dislike' onClick={() => {
            this.nextCareer();
          }}>DISLIKE</button>
        </div>
      </div>
    );
  }
}

Career.propTypes = { careers: PropTypes.array };

const mapStateToProps = state => ({ careers: state.careers });

export default connect(mapStateToProps)(Career);
