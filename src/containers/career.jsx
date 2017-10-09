import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './../components/nav_bar.jsx';
import CareerCard from './../components/career_card.jsx';

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This is career page</h1>
        <NavBar />
        <CareerCard career={this.props.careers[1]}/>
        <button>LIKE</button>
        <button>DISLIKE</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  careers: state.careers
});

export default connect(mapStateToProps)(Career);
