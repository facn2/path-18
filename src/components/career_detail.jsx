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
    console.log(this.props);
    return (
      <div>
        <NavBar />
        <h1>{ this.props.selected.title }</h1>
        <h1>{ this.props.selected.image }</h1>
        <h1>{ this.props.selected.description }</h1>
        <h1>{ this.props.selected.grade_bagrut }</h1>
        <h1>{ this.props.selected.grade_psychometric }</h1>
        <h1>{ this.props.selected.universities }</h1>
        <h1>{ this.props.selected.salary_start }</h1>
        <h1>{ this.props.selected.salary_ten_year }</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({ careers: state.careers })

export default connect(mapStateToProps)(CareerDetail);
