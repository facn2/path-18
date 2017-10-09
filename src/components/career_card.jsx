import React, { Component } from 'react';
import { connect } from 'react-redux';

class CareerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={this.props.careers[0].image} />
        <h2>{this.props.careers[0].title}</h2>
        <p>{this.props.careers[0].tagline}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  careers: state.careers
});

export default connect(mapStateToProps)(CareerCard);
