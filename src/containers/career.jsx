import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './../components/nav_bar.jsx';
import CareerCard from './../components/career_card.jsx';

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.addToLocal = this.addToLocal.bind(this);
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
        <h1>This is career page</h1>
        <NavBar />
        <CareerCard career={this.props.careers[this.state.currentIndex]}/>
        <button onClick={() => this.addToLocal()}>LIKE</button>
        <button>DISLIKE</button>
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
