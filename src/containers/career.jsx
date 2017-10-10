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
      <div>
        <h1>This is career page</h1>
        <NavBar />
        <CareerCard career={this.props.careers[this.state.currentIndex]}/>
        <button onClick={() => {
          this.nextCareer();
        }}>LIKE</button>
        <button onClick={() => {
          this.nextCareer();
        }}>DISLIKE</button>
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
