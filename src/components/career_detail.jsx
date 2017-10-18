import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar.jsx';

class CareerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render({ selected }) {
    return (
      <div>
        <NavBar />
        <h1>{ selected.title }</h1>
        <img src = { selected.icon } />
        <p>{ selected.description }</p>
        <h2>Grades you need: </h2>
        <p>Bagrut: { selected.grade_bagrut }</p>
        <p>Psychometric: { selected.grade_psychometric }</p>
        <h2>Universities offering this degree: </h2>
        <p>{ selected.universities }</p>
        <h2>Salary: </h2>
        <p>starting salary: { selected.salary_start }</p>
        <p>senior salary: { selected.salary_ten_year }</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ careers: state.careers });

export default connect(mapStateToProps)(CareerDetail);
