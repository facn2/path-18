import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './nav_bar.jsx';

class CareerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>{ this.props.selected.title }</h1>
        <img src = { this.props.selected.image } />
        <p>{ this.props.selected.description }</p>
        <h2>Grades you need: </h2>
        <p>Bagrut: { this.props.selected.grade_bagrut }</p>
        <p>Psychometric: { this.props.selected.grade_psychometric }</p>
        <h2>Universities offering this degree: </h2>
        <p>{ this.props.selected.universities }</p>
        <h2>Salary: </h2>
        <p>starting salary: { this.props.selected.salary_start }</p>
        <p>senior salary: { this.props.selected.salary_ten_year }</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ careers: state.careers })

export default connect(mapStateToProps)(CareerDetail);
