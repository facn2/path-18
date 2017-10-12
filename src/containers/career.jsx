import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from './../components/nav_bar.jsx';
import CareerCard from './../components/career_card.jsx';
import CareerInfo from './../components/career_info.jsx';
import likeImg from '../../public/images/like.png';
import dislikeImg from '../../public/images/dislike.png';

let touchStart = 0;
let touchEnd = 0;

const handleTouchStart = (event) => {
  touchStart = event.changedTouches[0].screenX;
};

class Career extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      careers: []
    };
    this.addToLocal = this.addToLocal.bind(this);
    this.nextCareer = this.nextCareer.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.flipCardBack = this.flipCardBack.bind(this);
  }

  componentWillMount() {
    if (localStorage.liked) {
      const likedCareers = JSON.parse(localStorage.liked);
      const allCareers = this.props.careers;
      const notLikedCareers = _.differenceBy(allCareers, likedCareers, 'title');
      if (notLikedCareers.length === 0) {
        this.setState({ careers: [{
          title: 'Game Over!',
          image: 'go.png',
          tagline: 'No more jobs. Check your list from the top menu'
        }],
        currentIndex: 0
        });
      } else {
        this.setState({ careers: notLikedCareers });
      }
    } else {
      this.setState({ careers: this.props.careers });
    }
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
    if (stateIndex < this.state.careers.length - 1) {
      this.setState({
        currentIndex: stateIndex + 1
      });
    } else {
      this.setState({ careers: [{
        title: 'Game Over!',
        image: 'go.png',
        tagline: 'No more jobs. Check your list from the top menu'
      }],
      currentIndex: 0
      });
    }
  }

  flipCard() {
    document.querySelector('.flipper').classList.add('flip');
  }

  flipCardBack() {
    document.querySelector('.flipper').classList.remove('flip');
  }

  addToLocal() {
    const career = this.state.careers[this.state.currentIndex];
    if (localStorage.liked) {
      const likedCareers = JSON.parse(localStorage.liked);
      if (!likedCareers.includes(career)) {
        likedCareers.push(career);
        localStorage.setItem('liked', JSON.stringify(likedCareers)); // (key of the localstorage, data sent to the storage
      }
    } else {
      const likedCareers = [this.state.careers[this.state.currentIndex]];
      localStorage.setItem('liked', JSON.stringify(likedCareers));
    }
  }

  render() {
    return (
      <div>
        <h1>This is career page</h1>
        <NavBar />
        <div className="flip-container">
          <div id="swipeZone" className="flipper"
            onTouchStart={event => handleTouchStart(event)}
            onTouchEnd={event => this.handleTouchEnd(event)}>
            <div className="front">
              <CareerCard career={this.state.careers[this.state.currentIndex]}/>
              <button
                onClick={() => {
                  this.flipCard();
                }}> Info</button>
            </div>
            <div className="back">
              <CareerInfo career={this.state.careers[this.state.currentIndex]}/>
              <button className="btn1" onClick={() => {
                this.flipCardBack();
              }}> Flip Back </button>
            </div>
          </div>
        </div>
        <div className="btn">
          <img src={dislikeImg} alt="dislike" onClick={() => {
            this.nextCareer();
          }}/>
          <img src={likeImg} alt="like" onClick={() => {
            this.nextCareer();
            this.addToLocal();
          }}/>
        </div>
      </div>
    );
  }
}

Career.propTypes = { careers: PropTypes.array };

const mapStateToProps = state => ({ careers: state.careers });

export default connect(mapStateToProps)(Career);
