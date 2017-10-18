import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Info from 'react-icons/lib/fa/info-circle';
import Back from 'react-icons/lib/fa/arrow-left';

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
      careers: [
        {
          title: ' ',
          image: ' ',
          description: ' ',
          degree: ' ',
          grade_bagrut: ' ',
          grade_psychometric: ' ',
          universities: ' ',
          salary_start: ' ',
          salary_ten_year: ' '
        }
      ]
    };
    this.addToLocal = this.addToLocal.bind(this);
    this.nextCareer = this.nextCareer.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.flipCardBack = this.flipCardBack.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.careers !== this.props.careers) {
      if (localStorage.liked) {
        const likedCareers = JSON.parse(localStorage.liked);
        const allCareers = nextProps.careers;
        const notLikedCareers = _.differenceBy(allCareers, likedCareers, 'title');
        if (notLikedCareers.length === 0) {
          this.setState(
            {
              careers: [
                {
                  title: 'You finished browsing',
                  image: 'https://www.safetyfirst.com.au/wp-content/uploads/2013/12/group_bookings_page.jpg',
                  tagline: 'Check out your list of liked jobs',
                  description: 'Check back soon for more careers.'
                }
              ],
              currentIndex: 0
            });
        } else {
          this.setState({ careers: notLikedCareers });
        }
      } else {
        this.setState({ careers: nextProps.careers });
      }
    }
  }

  componentWillMount() {
    if (localStorage.liked) {
      const likedCareers = JSON.parse(localStorage.liked);
      const allCareers = this.props.careers;
      const notLikedCareers = _.differenceBy(allCareers, likedCareers, 'title');
      if (notLikedCareers.length === 0) {
        this.setState({ careers: [{
          title: 'You finished browsing',
          image: 'https://www.safetyfirst.com.au/wp-content/uploads/2013/12/group_bookings_page.jpg',
          tagline: 'Check out your list of liked jobs.',
          description: 'Check back soon for more careers.'
        }],
        currentIndex: 0
        });
      } else {
        this.setState({ careers: notLikedCareers });
      }
    } if (this.props.careers.length !== 0) {
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

  checkFlip() {
    const flippedCard = document.querySelector('.flipper');
    if (flippedCard.classList.contains('flip')) {
      document.querySelector('.flipper').classList.remove('flip');
    }
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
        <NavBar />
        <div className='flip-container career-card'>
          <div id='swipeZone' className='flipper'
            onTouchStart={event => handleTouchStart(event)}
            onTouchEnd={event => this.handleTouchEnd(event)}>
            <div className='front'>
              <CareerCard career={this.state.careers[this.state.currentIndex]}/>
              <Info className='btn-info' size='3em' onClick={() => this.flipCard() } />
            </div>
            <div className='back'>
              <CareerInfo career={this.state.careers[this.state.currentIndex]}/>
              <Back className='btn-back' size='2em' onClick={() => this.flipCardBack() }/>
            </div>
          </div>
        </div>
        <div className='btn-likes'>
          <img className='btn-image' src={dislikeImg} alt='dislike'
            onClick={() => {
              this.nextCareer();
              this.checkFlip();
            }}/>
          <img className='btn-image' src={likeImg} alt='like'
            onClick={() => {
              this.nextCareer();
              this.addToLocal();
              this.checkFlip();
            }}/>
        </div>
      </div>
    );
  }
}

Career.propTypes = { careers: PropTypes.array };

const mapStateToProps = state => ({ careers: state.careers });

export default connect(mapStateToProps)(Career);
