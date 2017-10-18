import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchCareers from '../actions/fetch_careers';
import logoImg from '../../public/images/logo.png';

class Welcome extends Component {
  componentWillMount() {
    this.props.fetchCareers();
  }

  render() {
    return (
      <div className="container">
        <img className="logo" src={logoImg} alt="Path 18 Logo"/>
        <p> Welcome to Path18.<br></br>
         Path18 shows you a variety of jobs,
         grades, degrees you need and even salary to help you guide on your career path. Enjoy!</p>
        <Link className="startButton" to='/career'><span>START</span></Link>
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
