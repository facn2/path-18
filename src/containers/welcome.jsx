import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchCareers from '../actions/index';
import logoImg from '../../public/images/logo.png';

class Welcome extends Component {
  componentWillMount() {
    this.props.fetchCareers();
  }

  render() {
    return (
      <div>
        <img src={logoImg} alt="Path 18 Logo"/>
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
