import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchCareers from '../actions/index';

class Welcome extends Component {
  componentWillMount() {
    this.props.fetchCareers();
  }

  render() {
    return (
      <div>
        <h1>Path18</h1>
        <p> Welcome to our app.
          We aim to show you lots of jobs to help you decide on a suitable career path.
          We also give you lots of info on the degrees and grades you need. Hope you enjoy it!</p>
        <Link to='/career'>START</Link>
      </div>
    );
  }
}

Welcome.propTypes = {
  fetchCareers: PropTypes.func
};

const mapDispatchToProps = {
  fetchCareers
};


export default connect(null, mapDispatchToProps)(Welcome);
