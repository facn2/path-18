import React, {Component} from 'react';
import {connect} from 'react-redux';
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
      this.setState({ currentIndex: 0 });
    }
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
      <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div className="flipper">
          <div className="front">
            <h1>This is career page</h1>
            <NavBar/>
            <CareerCard id='swipeZone' career={this.props.careers[this.state.currentIndex]}/>
            <button>info</button>
          </div>
          <div className="back">
            <CareerInfo career={this.props.careers[this.state.currentIndex]} />
            <button id='like' onClick={() => {
              this.nextCareer();
              this.addToLocal();
            }}>LIKE</button>
            <button id='dislike' onClick= {() => { this.nextCareer(); }}>DISLIKE</button>
          </div>
        </div>
      </div>
    );
  }
}

Career.propTypes = { careers: PropTypes.array };

const mapStateToProps = state => ({ careers: state.careers });

export default connect(mapStateToProps)(Career);
